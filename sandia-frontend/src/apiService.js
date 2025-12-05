import axios from 'axios';

// Ruta base de la API, *asegúrate* de tener /api al final en .env:
// VITE_API_URL=http://localhost:8000/api
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

// Interceptor de errores global
axios.interceptors.response.use(
  response => response,
  error => {
    alert(error?.response?.data?.message || "Error de conexión con el servidor.");
    return Promise.reject(error);
  }
);

// Interceptor para autenticación Tipo Token (Django REST por defecto)
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Token ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

// Usuarios
export const getUsuarios = () => axios.get(`${API_URL}/usuarios/`);
export const getUsuario = id => axios.get(`${API_URL}/usuarios/${id}/`);
export const createUsuario = data => axios.post(`${API_URL}/usuarios/`, data);
export const updateUsuario = (id, data) => axios.put(`${API_URL}/usuarios/${id}/`, data);
export const deleteUsuario = id => axios.delete(`${API_URL}/usuarios/${id}/`);

// Servicios
export const getServicios = () => axios.get(`${API_URL}/servicios/`);
export const getServicio = id => axios.get(`${API_URL}/servicios/${id}/`);
export const createServicio = data => axios.post(`${API_URL}/servicios/`, data);
export const updateServicio = (id, data) => axios.put(`${API_URL}/servicios/${id}/`, data);
export const deleteServicio = id => axios.delete(`${API_URL}/servicios/${id}/`);

// Categorías
export const getCategorias = () => axios.get(`${API_URL}/categorias/`);
export const getCategoria = id => axios.get(`${API_URL}/categorias/${id}/`);
export const createCategoria = data => axios.post(`${API_URL}/categorias/`, data);
export const updateCategoria = (id, data) => axios.put(`${API_URL}/categorias/${id}/`, data);
export const deleteCategoria = id => axios.delete(`${API_URL}/categorias/${id}/`);

// Promociones
export const getPromociones = () => axios.get(`${API_URL}/promociones/`);
export const getPromocion = id => axios.get(`${API_URL}/promociones/${id}/`);
export const createPromocion = data => axios.post(`${API_URL}/promociones/`, data);
export const updatePromocion = (id, data) => axios.put(`${API_URL}/promociones/${id}/`, data);
export const deletePromocion = id => axios.delete(`${API_URL}/promociones/${id}/`);

// Horarios
export const getHorarios = () => axios.get(`${API_URL}/horarios/`);
export const getHorario = id => axios.get(`${API_URL}/horarios/${id}/`);
export const createHorario = data => axios.post(`${API_URL}/horarios/`, data);
export const updateHorario = (id, data) => axios.put(`${API_URL}/horarios/${id}/`, data);
export const deleteHorario = id => axios.delete(`${API_URL}/horarios/${id}/`);

// Combos
export const getCombos = () => axios.get(`${API_URL}/combos/`);
export const getCombo = id => axios.get(`${API_URL}/combos/${id}/`);
export const createCombo = data => axios.post(`${API_URL}/combos/`, data);
export const updateCombo = (id, data) => axios.put(`${API_URL}/combos/${id}/`, data);
export const deleteCombo = id => axios.delete(`${API_URL}/combos/${id}/`);

// Reservas
export const getReservas = () => axios.get(`${API_URL}/reservas/`);
export const getReserva = id => axios.get(`${API_URL}/reservas/${id}/`);
export const createReserva = data => axios.post(`${API_URL}/reservas/`, data);
export const updateReserva = (id, data) => axios.put(`${API_URL}/reservas/${id}/`, data);
export const deleteReserva = id => axios.delete(`${API_URL}/reservas/${id}/`);

// Pagos
export const getPagos = () => axios.get(`${API_URL}/pagos/`);
export const getPago = id => axios.get(`${API_URL}/pagos/${id}/`);
export const createPago = data => axios.post(`${API_URL}/pagos/`, data);
export const updatePago = (id, data) => axios.put(`${API_URL}/pagos/${id}/`, data);
export const deletePago = id => axios.delete(`${API_URL}/pagos/${id}/`);

// Cancelaciones
export const getCancelaciones = () => axios.get(`${API_URL}/cancelaciones/`);
export const getCancelacion = id => axios.get(`${API_URL}/cancelaciones/${id}/`);
export const createCancelacion = data => axios.post(`${API_URL}/cancelaciones/`, data);
export const updateCancelacion = (id, data) => axios.put(`${API_URL}/cancelaciones/${id}/`, data);
export const deleteCancelacion = id => axios.delete(`${API_URL}/cancelaciones/${id}/`);
