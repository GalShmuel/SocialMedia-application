// Importing axios to make HTTP requests to the backend API
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

// Function to handle login request, sending the form data to the backend API
export const logIn = (formData) => API.post('/auth/login', formData);

// Function to handle signup request, sending the form data to the backend API
export const signUp = (formData) => API.post('/auth/register', formData);
