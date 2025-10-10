import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/bms/v1",
  headers: {
    "Content-Type": "application/json",
    // cookies will be set every api
    withCredentials: true,
  },
});

// interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // document.cookie.split("=")[1] if we are using cookies
    const token = localStorage.getItem("tokenForBMS");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
