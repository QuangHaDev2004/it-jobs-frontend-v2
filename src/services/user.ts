import { axiosClient } from "@/libs/axiosClient";

export const userProfile = async (dataFinal: FormData) => {
  const res = await axiosClient.patch("/user/profile", dataFinal);
  return res.data;
};
