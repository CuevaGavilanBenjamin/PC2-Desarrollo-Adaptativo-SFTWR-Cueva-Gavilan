import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const obtenerOperadores = async () => {
  try {
    const response = await api.get('/operadores')
    return response.data
  } catch (error) {
    throw error
  }
}

export const obtenerMontos = async () => {
  try {
    const response = await api.get('/montos')
    return response.data
  } catch (error) {
    throw error
  }
}

export const verificarClave = async (clave) => {
  try {
    const response = await api.post('/recarga/verificar-clave', {
      clave: clave
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const procesarRecarga = async (numero, operador, monto) => {
  try {
    const response = await api.post('/recarga/procesar', {
      numero: numero,
      operador: operador,
      monto: monto
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export default api
