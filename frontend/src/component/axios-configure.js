import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
  withCredentials: true,
});

export default app;
