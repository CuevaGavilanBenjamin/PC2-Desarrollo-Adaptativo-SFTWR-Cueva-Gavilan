export default function Stepper({ currentStep }) {
  const steps = [
    { number: 1, label: 'Número' },
    { number: 2, label: 'Operador' },
    { number: 3, label: 'Monto' },
    { number: 4, label: 'Confirmar' },
    { number: 5, label: 'Éxito' }
  ]

  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div key={step.number} className="stepper-container">
          <div 
            className={`stepper-step ${step.number === currentStep ? 'active' : ''} ${step.number < currentStep ? 'completed' : ''}`}
          >
            {step.number < currentStep ? '✓' : step.number}
          </div>
          <span className="stepper-label">{step.label}</span>
          {index < steps.length - 1 && <div className={`stepper-line ${step.number < currentStep ? 'completed' : ''}`}></div>}
        </div>
      ))}
    </div>
  )
}
