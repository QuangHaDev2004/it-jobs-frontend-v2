/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";
import { GrMapLocation } from "react-icons/gr";
import { CompanyDetail, ReviewDetail } from "@/types";
import { PLACEHOLDER_IMG } from "@/constants";
import { api } from "@/libs/axios";
import { ButtonReview } from "../ButtonReview";
import { FaRegThumbsDown, FaRegThumbsUp, FaStar } from "react-icons/fa6";
import dayjs from "@/libs/dayjs";
import { CircleProgress } from "./CircleProgress";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const res = await api.get(`/company/detail/${id}`);
  const company = res.data.companyDetail;
  return {
    title: `Công ty ${company?.companyName}` || "Chi tiết công ty",
    description: company?.description?.slice(0, 150) || "Thông tin công ty.",
  };
}

export default async function CompanyDetailReviewPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;
  let reviewList: ReviewDetail[] = [];
  let companyDetail: CompanyDetail | null = null;

  try {
    const res = await api.get(`/company/detail/${id}`);
    companyDetail = res.data.companyDetail;
  } catch (error) {
    console.log(error);
  }

  try {
    const res = await api.get(`/company/detail/${id}/review`);
    reviewList = res.data.reviews;
  } catch (error) {
    console.log(error);
  }

  const ratingCount = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviewList.filter((item) => item.rating === star).length,
  }));

  const ratingData = ratingCount.map((item) => ({
    ...item,
    percent: reviewList.length ? (item.count / reviewList.length) * 100 : 0,
  }));

  const percent =
    (reviewList.filter((item) => item.rating > 2).length / reviewList.length) *
    100;

  return (
    <>
      {/* Company Header */}
      <div className="bg-job-primary py-[30px]">
        <div className="container">
          <div className="flex flex-wrap items-center gap-4">
            <div className="border-job-gray-100 aspect-square w-40 overflow-hidden rounded-sm border bg-white">
              <img
                src={companyDetail?.logo || PLACEHOLDER_IMG}
                alt={companyDetail?.companyName}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-full sm:flex-1">
              <div className="mb-2.5 text-[28px] font-bold text-white">
                {companyDetail?.companyName}
              </div>
              <div className="mb-6 flex items-center gap-2 text-sm font-normal text-white">
                <GrMapLocation className="text-[16px]" />
                {companyDetail?.address || "Chưa xác định"}
              </div>
              <ButtonReview id={companyDetail?.id} />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[30px] pb-[60px]">
        <div className="container">
          {/* Company Tabs */}
          <nav className="mb-5 rounded-lg bg-white p-5 shadow-md">
            <ul className="text-job-secondary flex items-center gap-12 text-[16px] font-bold">
              <li>
                <Link
                  href={""}
                  className="text-job-red-500 border-job-blue border-b-2 pb-5"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href={""} className="pb-5">
                  Đánh giá{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-wrap gap-5">
            {/* List Review */}
            <div className="mb-5 rounded-lg bg-white p-5 shadow-md lg:w-[65%]">
              <h2 className="text-job-secondary border-job-gray-100 mb-4 border-b border-dashed pb-4 text-[22px] font-bold">
                Đánh giá của mọi người
              </h2>
              <div className="flex flex-col gap-4">
                {reviewList.map((item) => (
                  <div
                    key={item.id}
                    className="border-job-gray-100 border-b border-dashed pb-4"
                  >
                    <div className="text-job-gray-500 text-sm font-normal capitalize">
                      {dayjs(item.createdAt).format("MMMM YYYY")}
                    </div>
                    <div className="text-job-secondary text-lg font-bold">
                      {item.title}
                    </div>
                    <div className="mb-6 flex items-center gap-10">
                      <div className="flex items-center gap-4">
                        <div className="rating">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`mask mask-star-2 h-4 w-4 bg-orange-400 ${star <= item.rating && "opacity-100"}`}
                            ></div>
                          ))}
                        </div>
                        <span>({item.rating})</span>
                      </div>
                      {item.rating > 2 ? (
                        <div className="text-job-green-500 flex items-center gap-2 text-[16px]">
                          <FaRegThumbsUp />
                          <span>Khuyến khích</span>
                        </div>
                      ) : (
                        <div className="text-job-red-500 flex items-center gap-2 text-[16px]">
                          <FaRegThumbsDown />
                          <span>Không khuyến khích</span>
                        </div>
                      )}
                    </div>
                    <div className="mb-4 flex flex-col">
                      <span className="text-job-secondary text-[16px] font-bold">
                        Điều tôi thích:
                      </span>
                      <p className="text-job-secondary">{item.pros}</p>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-job-secondary text-[16px] font-bold">
                        Đề nghị cả thiện:
                      </span>
                      <p className="text-job-secondary">{item.cons}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Info */}
            <div className="flex-1">
              <div className="mb-5 rounded-lg bg-white p-5 shadow-md">
                <h2 className="text-job-secondary border-job-gray-100 mb-4 border-b border-dashed pb-4 text-[22px] font-bold">
                  Đánh giá chung
                </h2>
                <div className="flex flex-col gap-4">
                  <div className="border-job-gray-100 border-b border-dashed pb-4">
                    <p className="text-job-secondary mb-4 text-center text-lg font-bold">
                      {reviewList.length || 0} đánh giá
                    </p>
                    <div className="mx-auto max-w-[320px]">
                      {ratingData.map((item) => (
                        <div
                          key={item.star}
                          className="flex items-center gap-4"
                        >
                          <div className="text-job-secondary flex items-center gap-1">
                            <span className="inline-block w-2.5">
                              {item.star}
                            </span>
                            <FaStar className="text-orange-400" />
                          </div>
                          <div className="relative h-2 flex-1 rounded-2xl bg-orange-100">
                            <div
                              className="absolute top-0 left-0 h-2 rounded-2xl bg-orange-400"
                              style={{ width: `${item.percent}%` }}
                            ></div>
                          </div>
                          <div className="w-10">{item.percent.toFixed(0)}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <CircleProgress percent={percent} />
                    <p className="text-center text-[16px]">
                      Khuyến khích làm việc tại đây
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
