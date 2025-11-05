/* eslint-disable @next/next/no-img-element */
import { positionList, workingFormList } from "@/constants/options";
import { JobItem } from "@/types";
import Link from "next/link";
import { FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6";

export const CardJobItem = ({ item }: { item: JobItem }) => {
  const position = positionList.find((pos) => pos.value === item.position);
  const workingForm = workingFormList.find(
    (work) => work.value === item.workingForm,
  );

  return (
    <>
      <Link
        href={`/job/detail/${item.id}`}
        className="border-job-gray relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-xl"
        style={{
          background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)",
        }}
      >
        <img
          src="/assets/images/cart-bg.svg"
          alt=""
          className="absolute top-0 left-0 h-auto w-full"
        />
        <div className="relative text-center">
          <div
            className="mx-auto my-5 aspect-square w-[116px] overflow-hidden rounded-lg bg-white"
            style={{
              boxShadow: "0px 4px 24px 0px #0000001F",
            }}
          >
            <img
              src={item.companyLogo}
              alt={item.companyName}
              className="h-full w-full object-contain p-2.5"
            />
          </div>
          <h3 className="text-job-secondary mx-2 mb-1.5 line-clamp-2 text-center text-lg font-bold sm:mx-[16px]">
            {item.title}
          </h3>
          <div className="text-job-secondary mb-3 text-sm font-normal">
            {item.companyName}
          </div>
          <div className="text-job-blue mb-1.5 text-[16px] font-semibold">
            {item.salaryMin && item.salaryMax ? (
              <span>
                {item.salaryMin.toLocaleString()}$ -{" "}
                {item.salaryMax.toLocaleString()}$
              </span>
            ) : (
              <span>Thỏa thuận</span>
            )}
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
            {item.cityName}
          </div>
          <div className="mx-2 mt-3 mb-5 flex flex-wrap items-center justify-center gap-2">
            {item.technologies.map((itemTech: string, indexTech: number) => (
              <div
                key={indexTech}
                className="border-job-gray text-job-gray-3 rounded-[20px] border px-[16px] py-1.5 text-sm font-normal"
              >
                {itemTech}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};
