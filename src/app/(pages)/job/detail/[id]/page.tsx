/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRightLong,
  FaArrowUpRightFromSquare,
  FaRegBuilding,
  FaRegClock,
  FaRegHeart,
} from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FormApply } from "./FormApply";
import { axiosServer } from "@/libs/axiosServer";
import { JobDetail } from "@/types";
import { positionList, workingFormList } from "@/constants/options";
import dayjs from "@/libs/dayjs";

export const metadata: Metadata = {
  title: "Chi tiết công việc",
  description: "Mô tả trang chi tiết công việc...",
};

export default async function JobDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;
  const res = await axiosServer.get(`/job/detail/${id}`);
  const data = res.data;

  let jobDetail: JobDetail | null = null;
  let position = null;
  let workingForm = null;

  if (data.code === "success") {
    jobDetail = data.jobDetail;
    position = positionList.find((pos) => pos.value === jobDetail?.position);
    workingForm = workingFormList.find(
      (work) => work.value === jobDetail?.workingForm,
    );
  }

  const time = dayjs.utc(jobDetail?.createdAt).tz("Asia/Ho_Chi_Minh").fromNow();

  return (
    <>
      <div className="pt-[30px] pb-[60px]">
        <div className="container">
          <div className="flex flex-wrap gap-5">
            <div className="w-full lg:w-[65%]">
              <div className="rounded-lg bg-white p-5 shadow-md">
                <h1 className="text-job-secondary mb-2.5 text-2xl font-bold sm:text-[28px]">
                  {jobDetail?.title}
                </h1>
                <div className="text-job-gray-3 mb-2.5 text-[16px] font-normal">
                  {jobDetail?.companyName}
                </div>
                <div className="text-job-blue mb-2.5 flex items-center gap-2 text-[20px] font-bold sm:mb-5">
                  <AiOutlineDollar className="text-2xl" />
                  {jobDetail?.salaryMin.toLocaleString()}$ -{" "}
                  {jobDetail?.salaryMax.toLocaleString()}$
                </div>
                <div className="mb-5 flex items-center gap-5">
                  <Link
                    href="#form-apply"
                    className="bg-job-blue block h-12 flex-1 cursor-pointer rounded-sm p-[14px] text-center text-[16px] font-bold text-white transition-all duration-300 hover:brightness-90"
                  >
                    Ứng tuyển
                  </Link>
                  <div className="tooltip">
                    <div className="tooltip-content">
                      <div className="text-sm">Lưu việc này</div>
                    </div>
                    <FaRegHeart className="text-job-red cursor-pointer text-[30px]" />
                  </div>

                  {/* <FaHeart /> */}
                </div>
                {jobDetail?.images && jobDetail.images.length > 0 && (
                  <div className="mb-5 grid grid-cols-3 gap-2 sm:gap-4">
                    {jobDetail.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={img}
                        className="border-job-gray aspect-[232/145] w-full rounded-sm border object-cover"
                      />
                    ))}
                  </div>
                )}
                <div className="text-job-secondary flex flex-col gap-2.5 text-sm font-normal">
                  <div className="flex items-center gap-2">
                    <FaRegUser className="text-[16px]" />
                    {position?.label}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegBuilding className="text-[16px]" />
                    {workingForm?.label}
                  </div>
                  {jobDetail?.address && (
                    <div className="flex items-center gap-2">
                      <GrMapLocation className="text-[16px]" />
                      {jobDetail.address}
                      <Link
                        href={`${process.env.NEXT_PUBLIC_API_GG_MAP}&query=${encodeURIComponent(jobDetail.address)}`}
                        target="_blank"
                      >
                        <FaArrowUpRightFromSquare className="text-job-blue" />
                      </Link>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <FaRegClock className="text-[16px]" />
                    Đăng {time}
                  </div>
                </div>
                <div className="border-job-gray my-4 border-b border-dashed"></div>
                {jobDetail?.technologies &&
                  jobDetail.technologies.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="mr-4 text-sm font-bold">Kỹ năng: </div>
                      {jobDetail.technologies.map((tech, index) => (
                        <Link
                          key={index}
                          href={`/search?language=${tech}`}
                          className="text-job-gray-3 hover:border-job-primary border-job-gray rounded-[20px] border px-4 py-1.5 text-xs font-normal transition-all duration-300"
                        >
                          {tech}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>

              <div className="mt-5 rounded-lg bg-white p-5 shadow-md">
                <div
                  dangerouslySetInnerHTML={{
                    __html: jobDetail?.description || "",
                  }}
                ></div>
              </div>

              <div
                id="form-apply"
                className="mt-5 rounded-lg bg-white p-5 shadow-md"
              >
                <h2 className="mb-5 text-[20px] font-bold text-black">
                  Ứng tuyển ngay
                </h2>
                {jobDetail && <FormApply jobId={jobDetail.id} />}
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-lg bg-white p-5 shadow-md">
                <div className="mb-5 flex gap-3">
                  <div className="border-job-gray aspect-square w-[100px] overflow-hidden rounded-sm border">
                    <img
                      src={jobDetail?.companyLogo}
                      alt={jobDetail?.companyName}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-job-secondary mb-1 line-clamp-1 text-lg font-bold">
                      {jobDetail?.companyName}
                    </div>
                    <Link
                      href={`/company/detail/${jobDetail?.companyId}`}
                      className="text-job-blue flex items-center gap-2 text-[16px] font-normal"
                    >
                      Xem công ty <FaArrowRightLong className="text-[16px]" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="border-job-gray flex items-center justify-between gap-2.5 border-b border-dashed pb-2 text-[16px] font-normal">
                    <div className="text-job-gray-2">Mô hình công ty</div>
                    <div className="text-job-secondary text-right">
                      {jobDetail?.companyModel}
                    </div>
                  </div>
                  <div className="border-job-gray flex items-center justify-between gap-2.5 border-b border-dashed pb-2 text-[16px] font-normal">
                    <div className="text-job-gray-2">Quy mô công ty</div>
                    <div className="text-job-secondary text-right">
                      {jobDetail?.companyEmployees}
                    </div>
                  </div>
                  <div className="border-job-gray flex items-center justify-between gap-2.5 border-b border-dashed pb-2 text-[16px] font-normal">
                    <div className="text-job-gray-2">Thời gian làm việc</div>
                    <div className="text-job-secondary text-right">
                      {jobDetail?.workingTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2.5 pb-2 text-[16px] font-normal">
                    <div className="text-job-gray-2">Làm việc ngoài giờ</div>
                    <div className="text-job-secondary text-right">
                      {jobDetail?.workOverTime}
                    </div>
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
