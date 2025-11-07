import axios from "axios";

export const axiosServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // quan trọng: giữ cookie backend trả về
});