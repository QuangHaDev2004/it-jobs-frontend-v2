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
};

export const saveJob = async (jobId: string) => {
  const res = await api.post(`/save-job/${jobId}`);
  return res.data;
};

export const getSaveJobs = async () => {
  const res = await api.get("/save-job");
  return res.data;
};

export const unSaveJob = async (jobId: string) => {
  const res = await api.delete(`/save-job/${jobId}`);
  return res.data;
};
