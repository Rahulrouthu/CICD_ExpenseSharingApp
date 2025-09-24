import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: '/api', // Use proxy path from vite.config.js
  withCredentials: true, // Important for CSRF tokens and authentication
  headers: {
    'Content-Type': 'application/json',
  },
});

// Alternative direct connection (fallback)
const directApi = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add CSRF token
api.interceptors.request.use(
  (config) => {
    // Get CSRF token from meta tag or cookie
    const csrfToken = document.querySelector('meta[name="_csrf"]')?.getAttribute('content') ||
                     getCsrfTokenFromCookie();
    
    if (csrfToken) {
      config.headers['X-CSRF-TOKEN'] = csrfToken;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.warn('Unauthorized access - redirecting to login');
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

// Helper function to get CSRF token from cookie
function getCsrfTokenFromCookie() {
  const name = 'XSRF-TOKEN';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// API methods
export const authAPI = {
  login: (credentials) => api.post('/login', credentials),
  register: (formData) => api.post('/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  logout: () => api.post('/logout'),
  getCsrfToken: () => api.get('/csrf-token'),
};

export const expenseAPI = {
  getAll: () => api.get('/expenses'),
  create: (expense) => api.post('/expenses', expense),
  update: (id, expense) => api.put(`/expenses/${id}`, expense),
  delete: (id) => api.delete(`/expenses/${id}`),
};

export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData),
};

// Export both instances for flexibility
export { api as default, directApi };
