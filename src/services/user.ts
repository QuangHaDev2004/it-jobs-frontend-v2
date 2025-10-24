import { api } from "@/libs/axios";

export const userProfile = async (dataFinal: FormData) => {
  const res = await api.patch("/user/profile", dataFinal);
  return res.data;
};
