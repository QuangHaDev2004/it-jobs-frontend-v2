/* eslint-disable @next/next/no-img-element */
"use client";
import { Spinner } from "@/components/loading/Spinner";
import { positionList, workingFormList } from "@/constants/options";
import { getJobList } from "@/services/company";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6";

type JobItem = {
  id: string;
  companyLogo: string;
  title: string;
  salaryMin: string;
  salaryMax: string;
  position: string;
  workingForm: string;
  companyCity: string;
  technologies: string[];
};

export default function JobList() {
  const { data, isLoading } = useQuery({
    queryKey: ["job-list"],
    queryFn: getJobList,
  });

  const jobList = data?.jobs || [];

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="grid grid-cols-1 gap-x-2.5 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
        {jobList.map((item: JobItem) => {
          const position = positionList.find(
            (pos) => pos.value === item.position,
          );
          const workingForm = workingFormList.find(
            (work) => work.value === item.workingForm,
          );

          return (
            <div
              key={item.id}
              className="border-job-gray relative flex flex-col justify-between overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-2xl"
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

              {/* Main Content */}
              <div className="relative text-center">
                <div
                  className="mx-auto mt-5 mb-4 aspect-square w-[125px] overflow-hidden rounded-lg bg-white sm:mt-8 sm:mb-6 sm:w-[160px]"
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
                <div className="text-job-blue mb-1.5 text-[16px] font-semibold">
                  {item.salaryMin.toLocaleString()}$ -{" "}
                  {item.salaryMax.toLocaleString()}$
                </div>
                <div className="text-job-secondary mb-1.5 flex items-center justify-center gap-2 text-sm font-normal">
                  <FaUserTie className="text-[16px]" />
                  {position?.label}
                </div>
                <div className="text-job-secondary mb-1.5 flex items-center justify-center gap-2 text-sm font-normal">
                  <FaBriefcase className="text-[16px]" />
                  {workingForm?.label}
                </div>
                <div className="text-job-secondary flex items-center justify-center gap-2 text-sm font-normal">
                  <FaLocationDot className="text-[16px]" />
                  {item.companyCity}
                </div>
                <div className="mt-3 mb-5 flex flex-wrap items-center justify-center gap-2">
                  {item.technologies.map((itemTech, indexTech) => (
                    <div
                      key={indexTech}
                      className="border-job-gray text-job-gray-3 rounded-[20px] border px-4 py-1.5 text-xs font-normal"
                    >
                      {itemTech}
                    </div>
                  ))}
                  <div className="border-job-gray text-job-gray-3 rounded-[20px] border px-4 py-1.5 text-xs font-normal">
                    NextJS
                  </div>
                </div>
              </div>

              {/* Button Action */}
              <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={`/company-manage/job/edit/${item.id}`}
                  className="bg-job-yellow inline-block rounded-sm px-5 py-2 text-sm font-normal transition-all duration-300 hover:brightness-95"
                >
                  Sửa
                </Link>
                <Link
                  href="#"
                  className="bg-job-red inline-block rounded-sm px-5 py-2 text-sm font-normal text-white transition-all duration-300 hover:brightness-95"
                >
                  Xóa
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
