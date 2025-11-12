import { api } from "@/libs/axios";

type SearchParams = {
  language: string;
  city: string;
  company: string;
  keyword: string;
  position: string;
  workingForm: string;
};

export const searchJob = async (params: SearchParams) => {
  const res = await api.get("/search", { params });
  return res.data;
};

export const applyJob = async (dataFinal: FormData) => {
  const res = await api.post("/job/apply", dataFinal);
  return res.data;
}
