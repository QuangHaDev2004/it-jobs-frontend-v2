import { api } from "@/libs/axios";

export const companyProfile = async (dataFinal: FormData) => {
  const res = await api.patch("/company/profile", dataFinal);
  return res.data;
};

export const createJob = async (dataFinal: FormData) => {
  const res = await api.post("/company/job/create", dataFinal);
  return res.data;
};

export const getJobList = async () => {
  const res = await api.get("/company/job/list");
  return res.data;
};
