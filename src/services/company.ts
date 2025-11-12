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

export const deleteJob = async (id: string) => {
  const res = await api.delete(`/company/job/delete/${id}`);
  return res.data;
};

export const getCompanyList = async () => {
  const res = await api.get("/company/list?limitItems=9");
  return res.data;
};

export const getCVList = async () => {
  const res = await api.get(`/company/cv/list`);
  return res.data;
};

export const getCVDetail = async (id: string) => {
  const res = await api.get(`/company/cv/detail/${id}`);
  return res.data;
};

export const changeStatusCV = async (dataFinal: {
  id: string;
  status: string;
}) => {
  const res = await api.patch(`/company/cv/change-status/${dataFinal.id}`, {
    status: dataFinal.status,
  });
  return res.data;
};

export const deleteCV = async (id: string) => {
  const res = await api.delete(`/company/cv/delete/${id}`);
  return res.data;
};
