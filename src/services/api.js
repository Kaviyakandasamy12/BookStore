import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const registerUser = (userData) => API.post('/users/register', userData);
export const loginUser = (userData) => API.post('/users/login', userData);
// export const fetchBooks = () => API.get('/books');
