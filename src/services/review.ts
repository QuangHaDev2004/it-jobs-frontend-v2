import { api } from "@/libs/axios";

export const createReview = async (
  id: string,
  dataFinal: {
    rating: number;
    title: string;
    pros: string;
    cons: string;
  },
) => {
  const res = await api.post(`/company/review/${id}`, dataFinal);
  return res.data;
};
