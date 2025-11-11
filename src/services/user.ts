import { axiosClient } from "@/libs/axiosClient";

export const userProfile = async (dataFinal: FormData) => {
  const res = await axiosClient.patch("/user/profile", dataFinal);
  return res.data;
};

export const getCVList = async () => {
  const res = await axiosClient.get(`/user/cv/list`);
  if (res.data.code !== "success") throw new Error(res.data.message);
  return res.data;
};
