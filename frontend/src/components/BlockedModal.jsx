export default function BlockedModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-icon">⛔</div>
        <h2>Demasiados intentos</h2>
        <p>Por tu seguridad, tu acceso ha sido bloqueado temporalmente.</p>
        <p>Intenta nuevamente más tarde.</p>
        <button className="modal-button" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  )
}
