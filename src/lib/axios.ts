import axios from "axios";
import Cookies from "js-cookie";
export const urlBase =
  import.meta.env.PUBLIC_API_URL || "https://put your api url here/api/";
const vercelUrl2 = "https://edu-tech-live.vercel.app";

// Create axios instances for different APIs
export const apiTest = axios.create({
  baseURL: vercelUrl2,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiBase = axios.create({
  baseURL: urlBase,
  timeout: 10_000,
  timeoutErrorMessage:
    "timeout of 10 seconds exceeded, please try again later.",
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// Request interceptor for adding auth tokens
apiBase.interceptors.request.use(
  (config) => {
    const raw = Cookies.get("auth");
    const token = raw ? JSON.parse(raw).token : undefined;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
