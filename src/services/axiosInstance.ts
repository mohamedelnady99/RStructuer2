import axios from "axios";
import Cookies from "js-cookie";

const getBaseURL = () => {
  const lang = window.localStorage.getItem("lang") || "en";
  return lang === "ar"
    ? import.meta.env.VITE_BASE_URL_AR
    : import.meta.env.VITE_BASE_URL;
};
const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
