import axios from "axios";

export const axiosHomeInstance = axios.create({
    baseURL: "http://localhost:3001/api",
  });