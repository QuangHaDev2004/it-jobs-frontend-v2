/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { Spinner } from "@/components/loading/Spinner";
import { Pagination } from "@/components/pagination/Pagination";
import { deleteJob, getJobList } from "@/services/company";
import { JobItem } from "@/types";
import { getJobInfo } from "@/utils/jobHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6";
import { toast } from "sonner";

export default function JobList() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { data, isPending: isPendingJobList } = useQuery({
    queryKey: ["jobList", page],
    queryFn: () => getJobList(page),
    placeholderData: (prev) => prev, // giữ lại data cũ trong lúc đang fetch cái mới
  });

  const jobList = data?.jobs ?? [];
  const totalPage = data?.totalPage || 0;

  const handlePagination = (event: any) => {
    const value = event.target.value;
    setPage(parseInt(value));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: deleteJob,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["jobList"], exact: false });
    },
    onError: (errors: any) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  if (isPendingJobList) return <Spinner />;

  if (!jobList.length)
    return (
      <div className="min-h-[500px] text-lg font-bold text-red-500">
        Công ty hiện chưa có công việc nào. Hãy tạo công việc mới!
      </div>
    );

  return (
    <>
      <>
        <div className="grid grid-cols-1 gap-x-2.5 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
          {jobList.map((item: JobItem) => {
            const { positionLabel, workingFormLabel } = getJobInfo(item);

            return (
              <div
                key={item.id}
                className="border-job-gray-100 relative flex flex-col justify-between overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-2xl"
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

                {/* Main Content */}
                <div className="relative text-center">
                  <div
                    className="mx-auto mt-5 mb-4 aspect-square w-[125px] overflow-hidden rounded-lg bg-white sm:mt-8 sm:mb-6 sm:w-40"
                    style={{
                      boxShadow: "0px 4px 24px 0px #0000001F",
                    }}
                  >
                    <img
                      src={item.companyLogo}
                      alt={item.title}
                      className="h-full w-full object-contain p-2.5"
                    />
                  </div>
                  <h3 className="text-job-secondary mx-2 mt-5 mb-1.5 line-clamp-2 text-center text-lg font-bold sm:mx-4">
                    {item.title}
                  </h3>
                  <div className="text-job-blue-500 mb-1.5 text-[16px] font-semibold">
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
                  <div className="text-job-secondary flex items-center justify-center gap-2 text-sm font-normal">
                    <FaLocationDot className="text-[16px]" />
                    {item.cityName}
                  </div>
                  <div className="mt-3 mb-5 flex flex-wrap items-center justify-center gap-2">
                    {item.technologies.map((itemTech, indexTech) => (
                      <div
                        key={indexTech}
                        className="border-job-gray-100 text-job-gray-900 rounded-[20px] border px-4 py-1.5 text-xs font-normal"
                      >
                        {itemTech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button Action */}
                <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href={`/company-manage/job/edit/${item.id}`}
                    className="bg-job-yellow-500 rounded-sm px-5 py-2 text-sm font-normal transition-all duration-300 hover:brightness-95"
                  >
                    Sửa
                  </Link>
                  <ButtonDelete
                    id={item.id}
                    isPending={isPending}
                    onDelete={(id) => mutate(id)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Phân trang */}
        {jobList.length > 0 && (
          <Pagination
            page={page}
            handlePagination={handlePagination}
            totalPage={totalPage}
          />
        )}
      </>
    </>
  );
}
