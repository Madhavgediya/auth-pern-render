import axios from "axios";

const API = axios.create({
  // baseURL: "https://mg-pern-auth-project-backend.onrender.com/api",
  baseURL: "https://mg-pern-auth-project-backend.onrender.com/api",
  withCredentials: true, // MUST be true
});

export default API;
