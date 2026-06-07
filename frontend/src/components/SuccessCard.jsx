export default function SuccessCard({ transaccion }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <div className="success-card">
      <div className="success-icon">✓</div>
      <h2>¡Recarga realizada con éxito!</h2>
      <div className="receipt">
        <div className="receipt-item">
          <span className="receipt-label">Código de operación:</span>
          <span className="receipt-value">{transaccion.id}</span>
        </div>
        <div className="receipt-item">
          <span className="receipt-label">Fecha:</span>
          <span className="receipt-value">{formatDate(transaccion.fecha)}</span>
        </div>
        <div className="receipt-item">
          <span className="receipt-label">Número:</span>
          <span className="receipt-value">{transaccion.numero}</span>
        </div>
        <div className="receipt-item">
          <span className="receipt-label">Operador:</span>
          <span className="receipt-value">{transaccion.operador}</span>
        </div>
        <div className="receipt-item">
          <span className="receipt-label">Monto:</span>
          <span className="receipt-value">S/ {transaccion.monto.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
