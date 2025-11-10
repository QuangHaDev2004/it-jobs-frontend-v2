/* eslint-disable @next/next/no-img-element */
"use client";
import { CVSkeleton } from "@/components/skeleton/CVSkeleton";
import { cvStatusList } from "@/constants/cvStatus";
import { getCVList } from "@/services/company";
import { CVDetail } from "@/types";
import { getJobInfo } from "@/utils/jobHelper";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { FaCircleCheck, FaEye, FaRegEnvelope } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";

export const CVList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["cvList"],
    queryFn: getCVList,
  });

  const cvList = data?.cvs ?? [];

  if (cvList.length === 0 && !isPending)
    return (
      <div className="text-lg font-bold">Chưa có ứng viên nào ứng tuyển</div>
    );

  return (
    <>
      <div className="grid grid-cols-1 gap-x-2.5 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
        {isPending ? (
          Array(6)
            .fill("")
            .map((_, index) => <CVSkeleton key={index} />)
        ) : (
          <>
            {cvList.map((item: CVDetail) => {
              const { positionLabel, workingFormLabel } = getJobInfo(item);
              const status = cvStatusList.find(
                (st) => st.value === item.status,
              );

              return (
                <div
                  key={item.id}
                  className="border-job-gray relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)",
                  }}
                >
                  <img
                    src="/assets/images/cart-bg.svg"
                    alt="Background"
                    className="absolute top-0 left-0 h-auto w-full"
                  />
                  <div className="relative text-center">
                    <h3 className="text-job-secondary mx-2 mt-5 mb-3 line-clamp-2 text-lg font-bold sm:mx-4">
                      {item.title}
                    </h3>
                    <div className="text-job-secondary mb-1.5 text-sm font-normal">
                      Ứng viên:{" "}
                      <span className="font-bold">{item.fullName}</span>
                    </div>
                    <div className="text-job-secondary mb-1.5 flex items-center justify-center gap-2 text-sm font-normal">
                      <FaRegEnvelope className="text-[16px]" /> {item.email}
                    </div>
                    <div className="text-job-secondary mb-3 flex items-center justify-center gap-2 text-sm font-normal">
                      <FiPhoneCall className="text-[16px]" /> {item.phone}
                    </div>
                    <div className="text-job-blue mb-1.5 text-[16px] font-semibold">
                      {item.salaryMin.toLocaleString()}$ -{" "}
                      {item.salaryMax.toLocaleString()}$
                    </div>
                    <div className="text-job-secondary mb-1.5 flex items-center justify-center gap-2 text-sm font-normal">
                      <FaRegUser className="text-[16px]" /> {positionLabel}
                    </div>
                    <div className="text-job-secondary mb-1.5 flex items-center justify-center gap-2 text-sm font-normal">
                      <IoBriefcaseOutline className="text-[16px]" />{" "}
                      {workingFormLabel}
                    </div>
                    <div className="mb-1.5">
                      <div
                        className={`flex items-center justify-center gap-2 text-sm font-normal ${item.viewed ? "text-job-secondary" : "text-job-red"}`}
                      >
                        <FaEye className="text-[16px]" />
                        {item.viewed ? "Đã xem" : "Chưa xem"}
                      </div>
                    </div>
                    <div>
                      <div
                        className="flex items-center justify-center gap-2 text-sm font-normal"
                        style={{ color: status?.color }}
                      >
                        <FaCircleCheck className="text-[16px]" />
                        {status?.label}
                      </div>
                    </div>
                    <div className="mx-2 mt-3 mb-5 flex flex-wrap items-center justify-center gap-2">
                      <Link
                        href={`/company-manage/cv/detail/${item.id}`}
                        className="bg-job-blue inline-block rounded-sm px-3 py-2 text-sm font-normal text-white sm:px-5"
                      >
                        Xem
                      </Link>
                      <Link
                        href="#"
                        className="bg-job-green-2 inline-block rounded-sm px-3 py-2 text-sm font-normal sm:px-5"
                      >
                        Duyệt
                      </Link>
                      <Link
                        href="#"
                        className="bg-job-orange inline-block rounded-sm px-3 py-2 text-sm font-normal text-white sm:px-5"
                      >
                        Từ chối
                      </Link>
                      <Link
                        href="#"
                        className="bg-job-red inline-block rounded-sm px-3 py-2 text-sm font-normal text-white sm:px-5"
                      >
                        Xóa
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* Pagination */}
      {/* <Pagination /> */}
    </>
  );
};
