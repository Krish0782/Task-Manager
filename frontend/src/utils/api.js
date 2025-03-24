import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.token =  token;
  }
  return config;
});

export const register = async (username, password, email) => {
  const response = await api.post('/users/register', { username, password, email });
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post('/users/login', { email, password });
  return response.data;
};

export const getTasks = async () => {
  const response = await api.get('/tasks/all');
  return response.data;
};

export const addTask = async (task) => {
  const response = await api.post('/tasks/create', task);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await api.put(`/tasks/update/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/delete/${id}`);
  return response.data;
};