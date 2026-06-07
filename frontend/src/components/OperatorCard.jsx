export default function OperatorCard({ operador, isSelected, onClick }) {
  return (
    <div 
      className={`operator-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="operator-logo">{operador.logo}</div>
      <div className="operator-name">{operador.nombre}</div>
      {isSelected && <div className="operator-check">✓</div>}
    </div>
  )
}
