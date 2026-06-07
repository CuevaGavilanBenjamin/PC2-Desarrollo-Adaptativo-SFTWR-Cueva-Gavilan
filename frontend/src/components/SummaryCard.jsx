export default function SummaryCard({ numero, operador, monto }) {
  return (
    <div className="summary-card">
      <h3>Resumen</h3>
      <div className="summary-item">
        <span className="summary-label">Número:</span>
        <span className="summary-value">{numero || '-'}</span>
      </div>
      {operador && (
        <div className="summary-item">
          <span className="summary-label">Operador:</span>
          <span className="summary-value">{operador}</span>
        </div>
      )}
      {monto && (
        <div className="summary-item">
          <span className="summary-label">Monto:</span>
          <span className="summary-value">S/ {monto.toFixed(2)}</span>
        </div>
      )}
    </div>
  )
}
