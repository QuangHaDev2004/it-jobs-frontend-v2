import { api } from "@/libs/axios";
import { RegisterRequest } from "@/types/api";

export const registerUser = async (dataFinal: RegisterRequest) => {
  const res = await api.post("/user/register", dataFinal);
  return res.data;
};
