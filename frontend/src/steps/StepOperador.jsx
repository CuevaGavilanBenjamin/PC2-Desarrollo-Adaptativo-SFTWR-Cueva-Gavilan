import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { obtenerOperadores } from '../services/api'
import OperatorCard from '../components/OperatorCard'
import SummaryCard from '../components/SummaryCard'
import LoadingSpinner from '../components/LoadingSpinner'

export default function StepOperador({ onNext, onBack, numero, operador, setOperador }) {
  const [operadores, setOperadores] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOperadores()
  }, [])

  const fetchOperadores = async () => {
    try {
      setLoading(true)
      const data = await obtenerOperadores()
      setOperadores(data)
    } catch (error) {
      toast.error('No se pudieron cargar los operadores')
    } finally {
      setLoading(false)
    }
  }

  const handleSelectOperador = (op) => {
    setOperador(op.nombre)
  }

  const handleNext = () => {
    if (operador) {
      onNext()
    } else {
      toast.error('Selecciona un operador')
    }
  }

  if (loading) {
    return <LoadingSpinner message="Cargando operadores..." />
  }

  return (
    <div className="step-container">
      <div className="step-content">
        <h2>Selecciona el operador</h2>
        <p className="step-description">¿De qué operador es el número?</p>
        
        <div className="operators-grid">
          {operadores.map((op) => (
            <OperatorCard
              key={op.id}
              operador={op}
              isSelected={operador === op.nombre}
              onClick={() => handleSelectOperador(op)}
            />
          ))}
        </div>

        <div className="button-group">
          <button onClick={onBack} className="btn btn-secondary">
            Atrás
          </button>
          <button 
            onClick={handleNext}
            disabled={!operador}
            className="btn btn-primary"
          >
            Siguiente
          </button>
        </div>
      </div>
      <SummaryCard numero={numero} operador={operador} />
    </div>
  )
}
