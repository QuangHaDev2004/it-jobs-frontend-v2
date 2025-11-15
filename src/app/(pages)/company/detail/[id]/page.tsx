/* eslint-disable @next/next/no-img-element */
import { CardJobItem } from "@/components/card/CardJobItem";
import { Metadata } from "next";
import Link from "next/link";
import { GrMapLocation } from "react-icons/gr";
import { GoGlobe } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { CompanyDetail, JobDetail } from "@/types";
import { PLACEHOLDER_IMG } from "@/constants";
import { api } from "@/libs/axios";
import { ButtonReview } from "./ButtonReview";

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

export default async function CompanyDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;
  let companyDetail: CompanyDetail | null = null;
  let jobList: JobDetail[] = [];

  try {
    const res = await api.get(`/company/detail/${id}`);
    companyDetail = res.data.companyDetail;
    jobList = res.data.jobs;
  } catch (error) {
    console.log(error);
  }

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
                  href={`/company/detail/${companyDetail?.id}`}
                  className="text-job-red-500 border-job-blue border-b-2 pb-5"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href={`/company/detail/${companyDetail?.id}/review`}
                  className="pb-5"
                >
                  Đánh giá{" "}
                  <span className="bg-job-gray-100 ml-2 rounded-4xl px-4 py-1 text-xs font-normal">
                    123
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company Info */}
          <div className="mb-5 rounded-lg bg-white p-5 shadow-md">
            <h2 className="text-job-secondary border-job-gray-100 mb-4 border-b border-dashed pb-4 text-[22px] font-bold">
              Thông tin chung
            </h2>
            <div className="grid grid-cols-2 gap-[10px]">
              <div className="">
                <div className="text-job-gray-500 mb-1 text-sm font-normal">
                  Mô hình công ty:
                </div>
                <div className="text-job-secondary text-[16px] font-normal">
                  {companyDetail?.companyModel || "Chưa xác định"}
                </div>
              </div>
              <div className="">
                <div className="text-job-gray-500 mb-1 text-sm font-normal">
                  Quy mô công ty:
                </div>
                <div className="text-job-secondary text-[16px] font-normal">
                  {companyDetail?.companyEmployees || "Chưa xác định"}
                </div>
              </div>
              <div className="">
                <div className="text-job-gray-500 mb-1 text-sm font-normal">
                  Thời gian làm việc:
                </div>
                <div className="text-job-secondary text-[16px] font-normal">
                  {companyDetail?.workingTime || "Chưa xác định"}
                </div>
              </div>
              <div className="">
                <div className="text-job-gray-500 mb-1 text-sm font-normal">
                  Làm việc ngoài giờ:
                </div>
                <div className="text-job-secondary text-[16px] font-normal">
                  {companyDetail?.workOverTime || "Chưa xác định"}
                </div>
              </div>
            </div>
          </div>

          {/* Company Introduction */}
          <div className="mb-6 rounded-lg bg-white p-5 shadow-md">
            <h2 className="text-job-secondary border-job-gray-100 mb-4 border-b border-dashed pb-4 text-[22px] font-bold">
              Giới thiệu công ty
            </h2>
            <div className="border-job-gray-100 mb-4 border-b border-dashed pb-4">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    companyDetail?.description ||
                    "Chưa có thông tin giới thiệu về công ty",
                }}
              ></div>
            </div>
            <div className="text-job-blue-500 flex items-center gap-6 text-[16px] font-normal">
              <Link href={""} className="flex items-center gap-2">
                <GoGlobe className="text-[20px]" />
                Website công ty
              </Link>
              <Link href={""} className="flex items-center gap-2">
                <FiFacebook className="text-[20px]" /> Facebook Page
              </Link>
            </div>
          </div>

          {/* Job List */}
          <div>
            {jobList && jobList.length > 0 ? (
              <>
                <h2 className="text-job-secondary mb-5 text-2xl font-bold">
                  {jobList.length} việc làm đang tuyển dụng
                </h2>

                <div className="grid grid-cols-1 gap-x-2.5 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
                  {jobList.map((item: JobDetail) => (
                    <CardJobItem key={item.id} item={item} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-lg font-bold">
                Hiện tại công ty chưa có vị trí tuyển dụng nào.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
