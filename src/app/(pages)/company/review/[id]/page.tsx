import { Metadata } from "next";
import { FormReview } from "./FormReview";
import { CompanyDetail } from "@/types";
import { api } from "@/libs/axios";

export const metadata: Metadata = {
  title: "Đánh giá công ty",
  description: "Mô tả trang Đánh giá công ty...",
};

export default async function CompanyReviewPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;
  let companyDetail: CompanyDetail | null = null;

  try {
    const res = await api.get(`/company/detail/${id}`);
    companyDetail = res.data.companyDetail;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="py-[60px]">
      <div className="container">
        <div className="rounded-lg bg-white p-5 sm:p-10 shadow-md">
          <h1 className="text-job-secondary mb-3 text-lg sm:text-2xl font-bold">
            Đánh giá công ty {companyDetail?.companyName}
          </h1>
          <p className="text-job-secondary mb-6 text-sm sm:text-[16px]">
            Bạn chỉ mất 1 phút để hoàn thành bảng đánh giá này. Ý kiến của bạn
            sẽ giúp ích rất nhiều cho cộng đồng Developer đang tìm việc.
          </p>
          <FormReview id={id} />
        </div>
      </div>
    </div>
  );
}
