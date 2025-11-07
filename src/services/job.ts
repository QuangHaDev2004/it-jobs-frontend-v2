import { axiosClient } from "@/libs/axiosClient";

type SearchParams = {
  language: string;
  city: string;
  company: string;
  keyword: string;
  position: string;
  workingForm: string;
};

export const searchJob = async (params: SearchParams) => {
  const res = await axiosClient.get("/search", { params });
  if (res.data.code !== "success") throw new Error(res.data.message);
  return res.data;
};
