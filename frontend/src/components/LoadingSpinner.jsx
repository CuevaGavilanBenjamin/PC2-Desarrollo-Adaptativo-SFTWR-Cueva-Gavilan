export default function LoadingSpinner({ message = 'Procesando...' }) {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>{message}</p>
      </div>
    </div>
  )
}
