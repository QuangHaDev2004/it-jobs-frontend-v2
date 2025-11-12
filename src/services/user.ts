import { api } from "@/libs/axios";

export const userProfile = async (dataFinal: FormData) => {
  const res = await api.patch("/user/profile", dataFinal);
  return res.data;
};

export const getCVList = async () => {
  const res = await api.get(`/user/cv/list`);
  return res.data;
};
