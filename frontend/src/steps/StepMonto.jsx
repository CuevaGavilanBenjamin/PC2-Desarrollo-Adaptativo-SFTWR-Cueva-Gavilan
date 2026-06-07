import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import SummaryCard from '../components/SummaryCard'
import { obtenerMontos } from '../services/api'

export default function StepMonto({ onNext, onBack, numero, operador, monto, setMonto }) {
  const [customMonto, setCustomMonto] = useState('')
  const [error, setError] = useState('')
  const [montosRapidos, setMontosRapidos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMontos = async () => {
      try {
        const data = await obtenerMontos()
        setMontosRapidos(data)
      } catch (err) {
        toast.error('No se pudieron cargar los montos rápidos')
      } finally {
        setLoading(false)
      }
    }
    fetchMontos()
  }, [])

  const selectMonto = (valor) => {
    setMonto(valor)
    setCustomMonto('')
    setError('')
  }

  const handleCustomMonto = (e) => {
    const value = e.target.value
    setCustomMonto(value)
    
    if (value) {
      const num = parseFloat(value)
      if (num < 5 || num > 100) {
        setError('El monto debe estar entre S/5 y S/100')
      } else {
        setError('')
        setMonto(num)
      }
    } else {
      setMonto(0)
    }
  }

  const handleNext = () => {
    if (!monto || monto < 5 || monto > 100) {
      toast.error('El monto debe estar entre S/5 y S/100')
      return
    }
    onNext()
  }

  return (
    <div className="step-container">
      <div className="step-content">
        <h2>Selecciona el monto</h2>
        <p className="step-description">¿Cuánto deseas recargar?</p>
        
        <div className="montos-grid">
          {loading ? (
            <p>Cargando montos...</p>
          ) : (
            montosRapidos.map((m) => (
              <button
                key={m}
                className={`monto-button ${monto === m ? 'selected' : ''}`}
                onClick={() => selectMonto(m)}
              >
                S/ {m}
              </button>
            ))
          )}
        </div>

        <div className="form-group">
          <label>Monto personalizado</label>
          <div className="custom-monto">
            <span>S/</span>
            <input
              type="number"
              min="5"
              max="100"
              placeholder="Ingresa entre 5 y 100"
              value={customMonto}
              onChange={handleCustomMonto}
              className={error ? 'error' : ''}
            />
          </div>
          {error && <span className="error-message">{error}</span>}
        </div>

        <div className="button-group">
          <button onClick={onBack} className="btn btn-secondary">
            Atrás
          </button>
          <button 
            onClick={handleNext}
            disabled={!monto || monto < 5 || monto > 100}
            className="btn btn-primary"
          >
            Siguiente
          </button>
        </div>
      </div>
      <SummaryCard numero={numero} operador={operador} monto={monto} />
    </div>
  )
}
