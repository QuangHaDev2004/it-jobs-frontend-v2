/* eslint-disable @next/next/no-img-element */
"use client";
// import { Pagination } from "@/components/pagination/Pagination";
import { cvStatusList } from "@/constants/cvStatus";
import { getCVList } from "@/services/user";
import { CVDetail } from "@/types";
import { getJobInfo } from "@/utils/jobHelper";
import { useQuery } from "@tanstack/react-query";
import { FaBriefcase, FaCircleCheck, FaUserTie } from "react-icons/fa6";

export const CVList = () => {
  const { data, isPending: isPendingCVs } = useQuery({
    queryKey: ["cvListUser"],
    queryFn: getCVList,
  });

  const cvList = data?.cvs ?? [];

  if (cvList.length === 0 && !isPendingCVs)
    return (
      <div className="text-lg font-bold">Bạn chưa ứng tuyển công việc nào</div>
    );

  return (
    <>
      <div className="grid grid-cols-1 gap-x-2.5 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
        {cvList.map((item: CVDetail) => {
          const { positionLabel, workingFormLabel } = getJobInfo(item);
          const status = cvStatusList.find((st) => st.value === item.status);

          return (
            <div
              key={item.id}
              className="border-job-gray relative overflow-hidden rounded-lg border"
              style={{
                background:
                  "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)",
              }}
            >
              <img
                src="/assets/images/cart-bg.svg"
                alt=""
                className="absolute top-0 left-0 h-auto w-full"
              />
              <div className="relative text-center">
                <h3 className="text-job-secondary mx-4 mt-5 mb-3 line-clamp-2 text-lg font-bold sm:mx-4">
                  {item.title}
                </h3>
                <div className="text-job-secondary mb-1.5 text-sm font-normal">
                  Công ty: <span className="font-bold">{item.companyName}</span>
                </div>
                <div className="text-job-blue mb-1.5 text-[16px] font-semibold">
                  {item.salaryMin.toLocaleString()}$ -{" "}
                  {item.salaryMax.toLocaleString()}$
                </div>
                <div className="text-job-secondary mb-1.5 flex items-center justify-center gap-2 text-sm font-normal">
                  <FaUserTie className="text-[16px]" />
                  {positionLabel}
                </div>
                <div className="text-job-secondary mb-1.5 flex items-center justify-center gap-2 text-sm font-normal">
                  <FaBriefcase className="text-[16px]" />
                  {workingFormLabel}
                </div>
                <div className="mb-5">
                  <div
                    className="flex items-center justify-center gap-2 text-sm font-normal"
                    style={{ color: status?.color }}
                  >
                    <FaCircleCheck className="text-[16px]" />
                    {status?.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Phân trang */}
      {/* <Pagination /> */}
    </>
  );
};
