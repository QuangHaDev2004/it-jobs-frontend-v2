import { api } from "@/libs/axios";

export const searchJob = async (language: string) => {
  const res = await api.get(`/search?language=${language}`);
  if (res.data.code !== "success") throw new Error(res.data.message);
  return res.data;
};
