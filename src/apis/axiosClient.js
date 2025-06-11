import axios from "axios";
import queryString from "query-string";

const baseURL = "https://api.escuelajs.co/api/v1/";

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => queryString.stringify(params),
  },
});

// Request interceptor
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here if needed
  // const token = localStorage.getItem('token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    console.error("Axios error:", error.message);
    throw error;
  }
);

// Named export
export { axiosClient };

// Default export
export default axiosClient;