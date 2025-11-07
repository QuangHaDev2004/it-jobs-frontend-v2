import { axiosClient } from "@/libs/axiosClient";

export const getCityList = async () => {
  const res = await axiosClient.get("/city/list");
  return res.data;
};
