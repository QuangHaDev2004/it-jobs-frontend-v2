import { axiosClient } from "@/libs/axiosClient";
import {
  LoginCompanyRequest,
  LoginUserRequest,
  RegisterCompanyRequest,
  RegisterUserRequest,
} from "@/types/api";

export const registerUser = async (dataFinal: RegisterUserRequest) => {
  const res = await axiosClient.post("/user/register", dataFinal);
  return res.data;
};

export const loginUser = async (dataFinal: LoginUserRequest) => {
  const res = await axiosClient.post("/user/login", dataFinal);
  return res.data;
};

export const registerCompany = async (dataFinal: RegisterCompanyRequest) => {
  const res = await axiosClient.post("/company/register", dataFinal);
  return res.data;
};

export const loginCompany = async (dataFinal: LoginCompanyRequest) => {
  const res = await axiosClient.post("/company/login", dataFinal);
  return res.data;
};

export const checkAuth = async () => {
  const res = await axiosClient.get("/auth/check");
  return res.data;
};
