import { useEffect } from 'react'
import { toast } from 'react-toastify'
import SuccessCard from '../components/SuccessCard'

export default function StepExito({ transaccion, onReset }) {
  useEffect(() => {
    toast.success('¡Recarga exitosa!')
  }, [])

  const handleNuevaRecarga = () => {
    onReset()
  }

  return (
    <div className="step-container">
      <div className="step-content">
        <SuccessCard transaccion={transaccion} />
        
        <button 
          onClick={handleNuevaRecarga}
          className="btn btn-primary"
        >
          Nueva Recarga
        </button>
      </div>
    </div>
  )
}
