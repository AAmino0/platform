import axios from "axios";
import toast from "react-hot-toast";

// Create Axios instance
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, 
});

// Request Interceptor: Attach Bearer Token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Authentication Errors
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // ✅ Unauthorized: Redirect to Login
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.error("Session expired, please login again.");
        setTimeout(() => {
          window.location.href = "/auth/login";
        }, 1000);
      }

      // ✅ Forbidden: No Permission
      if (error.response.status === 403) {
        toast.error("You do not have permission to perform this action.");
      }

      // ✅ Validation Errors
      if (error.response.status === 422) {
        return Promise.reject(error.response.data.errors);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
