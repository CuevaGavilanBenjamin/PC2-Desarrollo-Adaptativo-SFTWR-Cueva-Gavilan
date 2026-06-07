import { useState } from 'react'
import { toast } from 'react-toastify'
import { procesarRecarga } from '../services/api'
import Stepper from '../components/Stepper'
import LoadingSpinner from '../components/LoadingSpinner'
import StepPhone from '../steps/StepPhone'
import StepOperador from '../steps/StepOperador'
import StepMonto from '../steps/StepMonto'
import StepConfirmar from '../steps/StepConfirmar'
import StepExito from '../steps/StepExito'

export default function RecargaPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [numero, setNumero] = useState('')
  const [operador, setOperador] = useState('')
  const [monto, setMonto] = useState(0)
  const [loading, setLoading] = useState(false)
  const [transaccion, setTransaccion] = useState(null)

  const handleNext = async () => {
    if (currentStep === 4) {
      try {
        setLoading(true)
        const response = await procesarRecarga(numero, operador, monto)
        setTransaccion(response)
        setCurrentStep(5)
      } catch (error) {
        const message = error.response?.data || 'Error al procesar la recarga. Intenta nuevamente'
        toast.error(message)
      } finally {
        setLoading(false)
      }
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleReset = () => {
    setCurrentStep(1)
    setNumero('')
    setOperador('')
    setMonto(0)
    setTransaccion(null)
  }

  if (loading) {
    return <LoadingSpinner message="Procesando recarga..." />
  }

  return (
    <div className="recarga-page">
      <div className="recarga-container">
        <div className="recarga-header">
          <h1>Recarga Celular</h1>
          <p>Realiza tu recarga de forma rápida y segura</p>
        </div>

        <Stepper currentStep={currentStep} />

        <div className="recarga-body">
          {currentStep === 1 && (
            <StepPhone 
              onNext={handleNext}
              numero={numero}
              setNumero={setNumero}
            />
          )}
          {currentStep === 2 && (
            <StepOperador
              onNext={handleNext}
              onBack={handleBack}
              numero={numero}
              operador={operador}
              setOperador={setOperador}
            />
          )}
          {currentStep === 3 && (
            <StepMonto
              onNext={handleNext}
              onBack={handleBack}
              numero={numero}
              operador={operador}
              monto={monto}
              setMonto={setMonto}
            />
          )}
          {currentStep === 4 && (
            <StepConfirmar
              onNext={handleNext}
              onBack={handleBack}
              numero={numero}
              operador={operador}
              monto={monto}
            />
          )}
          {currentStep === 5 && (
            <StepExito
              transaccion={transaccion}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  )
}
