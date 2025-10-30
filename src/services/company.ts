import { api } from "@/libs/axios";

export const companyProfile = async (dataFinal: FormData) => {
  const res = await api.patch("/company/profile", dataFinal);
  return res.data;
};

export const createJob = async (dataFinal: FormData) => {
  const res = await api.post("/company/job/create", dataFinal);
  return res.data;
};

export const getJobList = async (page: number) => {
  const res = await api.get(`/company/job/list?page=${page}`);
  return res.data;
};

export const getJobEditData = async (id: string) => {
  const res = await api.get(`/company/job/edit/${id}`);
  return res.data;
};

export const editJob = async (id: string, dataFinal: FormData) => {
  const res = await api.patch(`/company/job/edit/${id}`, dataFinal);
  return res.data;
};
