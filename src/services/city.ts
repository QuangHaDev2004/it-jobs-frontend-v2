import { api } from "@/libs/axios";

export const getCityList = async () => {
  const res = await api.get("/city/list");
  return res.data;
};
