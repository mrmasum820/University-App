import axios from "axios";

const apiConfig = axios.create({
  baseURL: "https://api.bnine.co/api/v1",
  //baseURL: "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach token
apiConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiConfig;
