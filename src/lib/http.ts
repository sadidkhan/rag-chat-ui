import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8000", // change if your API runs elsewhere
  timeout: 30000,
});
