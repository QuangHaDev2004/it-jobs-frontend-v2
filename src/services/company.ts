import { api } from "@/libs/axios";

export const companyProfile = async (dataFinal: FormData) => {
  const res = await api.patch("/company/profile", dataFinal);
  return res.data;
};
