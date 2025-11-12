import { api } from "@/libs/axios";

export const registerUser = async (dataFinal: {
  fullName: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/user/register", dataFinal);
  return res.data;
};

export const loginUser = async (dataFinal: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/user/login", dataFinal);
  return res.data;
};

export const registerCompany = async (dataFinal: {
  companyName: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/company/register", dataFinal);
  return res.data;
};

export const loginCompany = async (dataFinal: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/company/login", dataFinal);
  return res.data;
};

export const logout = async () => {
  const res = await api.get("/auth/logout");
  return res.data;
};

export const checkAuth = async () => {
  const res = await api.get("/auth/check");
  return res.data;
};
