import { useState } from 'react'
import SummaryCard from '../components/SummaryCard'

export default function StepPhone({ onNext, numero, setNumero }) {
  const [error, setError] = useState('')

  const isValid = /^\d{9}$/.test(numero)

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 9)
    setNumero(value)
    if (value && !isValid && value.length < 9) {
      setError('Ingresa un número válido de 9 dígitos')
    } else {
      setError('')
    }
  }

  const handleNext = () => {
    if (isValid) {
      onNext()
    } else {
      setError('Ingresa un número válido de 9 dígitos')
    }
  }

  return (
    <div className="step-container">
      <div className="step-content">
        <h2>Ingresa tu número celular</h2>
        <p className="step-description">Destino de la recarga</p>
        
        <div className="form-group">
          <input
            type="tel"
            placeholder="Ej: 987654321"
            value={numero}
            onChange={handleChange}
            maxLength="9"
            className={`phone-input ${error ? 'error' : ''}`}
          />
          {error && <span className="error-message">{error}</span>}
        </div>

        <button 
          onClick={handleNext}
          disabled={!isValid}
          className="btn btn-primary"
        >
          Siguiente
        </button>
      </div>
      <SummaryCard numero={numero} />
    </div>
  )
}
