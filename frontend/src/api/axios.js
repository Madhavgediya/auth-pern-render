import axios from "axios";

const API = axios.create({
  // baseURL: "https://mg-pern-auth-project-backend.onrender.com/api",
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // MUST be true
});

export default API;
