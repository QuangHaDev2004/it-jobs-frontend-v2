import { api } from "@/libs/axios";
import {
  LoginUserRequest,
  RegisterCompanyRequest,
  RegisterUserRequest,
} from "@/types/api";

export const registerUser = async (dataFinal: RegisterUserRequest) => {
  const res = await api.post("/user/register", dataFinal);
  return res.data;
};

export const loginUser = async (dataFinal: LoginUserRequest) => {
  const res = await api.post("/user/login", dataFinal);
  return res.data;
};

export const registerCompany = async (dataFinal: RegisterCompanyRequest) => {
  const res = await api.post("/company/register", dataFinal);
  return res.data;
};

export const checkAuth = async () => {
  const res = await api.get("/auth/check");
  return res.data;
};
