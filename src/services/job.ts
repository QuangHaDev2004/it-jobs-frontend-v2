import { api } from "@/libs/axios";

type SearchParams = {
  language: string;
  city: string;
};

export const searchJob = async (params: SearchParams) => {
  const res = await api.get("/search", { params });
  if (res.data.code !== "success") throw new Error(res.data.message);
  return res.data;
};
