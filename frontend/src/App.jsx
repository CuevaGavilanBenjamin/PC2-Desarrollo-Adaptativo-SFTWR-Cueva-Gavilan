import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RecargaPage from './pages/RecargaPage'

function App() {
  return (
    <>
      <RecargaPage />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
