import { axiosClient } from "@/libs/axiosClient";

export const companyProfile = async (dataFinal: FormData) => {
  const res = await axiosClient.patch("/company/profile", dataFinal);
  return res.data;
};

export const createJob = async (dataFinal: FormData) => {
  const res = await axiosClient.post("/company/job/create", dataFinal);
  return res.data;
};

export const getJobList = async (page: number) => {
  const res = await axiosClient.get(`/company/job/list?page=${page}`);
  return res.data;
};

export const getJobEditData = async (id: string) => {
  const res = await axiosClient.get(`/company/job/edit/${id}`);
  return res.data;
};

export const editJob = async (id: string, dataFinal: FormData) => {
  const res = await axiosClient.patch(`/company/job/edit/${id}`, dataFinal);
  return res.data;
};

export const deleteJob = async (id: string) => {
  const res = await axiosClient.delete(`/company/job/delete/${id}`);
  return res.data;
};

export const getCompanyList = async () => {
  const res = await axiosClient.get("/company/list?limitItems=9");
  if (res.status !== 200) throw new Error(res.data.message);
  return res.data;
};
