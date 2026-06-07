import { useState } from 'react'
import { toast } from 'react-toastify'
import { verificarClave } from '../services/api'
import SummaryCard from '../components/SummaryCard'
import LoadingSpinner from '../components/LoadingSpinner'
import BlockedModal from '../components/BlockedModal'

export default function StepConfirmar({ onNext, onBack, numero, operador, monto }) {
  const [clave, setClave] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [blocked, setBlocked] = useState(false)

  const handleVerificar = async () => {
    if (!clave) {
      toast.error('Ingresa tu clave online')
      return
    }

    try {
      setLoading(true)
      await verificarClave(clave)
      onNext()
    } catch (error) {
      const message = error.response?.data || 'Error al verificar la clave'
      
      if (message.includes('Demasiados intentos')) {
        setBlocked(true)
      } else {
        toast.error(message)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleBlockedClose = () => {
    setBlocked(false)
    onBack()
  }

  if (loading) {
    return <LoadingSpinner message="Verificando clave..." />
  }

  if (blocked) {
    return <BlockedModal onClose={handleBlockedClose} />
  }

  return (
    <div className="step-container">
      <div className="step-content">
        <h2>Confirma tu recarga</h2>
        <p className="step-description">Ingresa tu clave online para confirmar</p>
        
        <div className="form-group">
          <label>Clave Online</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Ingresa tu clave"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleVerificar()}
            />
            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? 'Ocultar' : 'Mostrar'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>

        <div className="button-group">
          <button onClick={onBack} className="btn btn-secondary">
            Atrás
          </button>
          <button 
            onClick={handleVerificar}
            disabled={!clave}
            className="btn btn-primary"
          >
            Confirmar Recarga
          </button>
        </div>
      </div>
      <SummaryCard numero={numero} operador={operador} monto={monto} />
    </div>
  )
}
