import { AuthProvider } from 'react-admin';

const API_URL = 'http://51.21.51.141:3000/api';

// Mock credentials for development
const MOCK_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    // First try mock authentication for development
    if (username === MOCK_CREDENTIALS.username && password === MOCK_CREDENTIALS.password) {
      localStorage.setItem('token', 'mock-token-' + Date.now());
      return Promise.resolve();
    }
    
    // If mock fails, try the real API
    return fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then(res => {
        if (!res.ok) {
          // If API fails, show helpful error message
          throw new Error(`Authentication failed: ${res.status} ${res.statusText}. Try username: "admin", password: "admin123" for demo.`);
        }
        return res.json();
      })
      .then(({ token }) => {
        localStorage.setItem('token', token);
      })
      .catch(error => {
        // If network fails, suggest mock credentials
        if (error.message.includes('fetch')) {
          throw new Error('Cannot connect to server. Try username: "admin", password: "admin123" for demo mode.');
        }
        throw error;
      });
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
  checkError: error => {
    const status = (error as any).status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
