/* eslint-disable @next/next/no-img-element */
import { CompanyItem } from "@/types";
import Link from "next/link";

export const CardCompanyItem = ({ item }: { item: CompanyItem }) => {
  return (
    <>
      <Link
        href={""}
        className="border-job-gray relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-xl"
        style={{
          background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)",
        }}
      >
        <img
          src="/assets/images/cart-bg.svg"
          alt="Background"
          className="absolute top-0 left-0 h-auto w-full"
        />
        <div className="relative">
          <div
            className="mx-auto mt-5 mb-4 aspect-square w-[125px] overflow-hidden rounded-lg bg-white sm:mt-8 sm:mb-6 sm:w-40"
            style={{
              boxShadow: "0px 4px 24px 0px #0000001F",
            }}
          >
            <img
              src={item.logo}
              alt={item.companyName}
              className="h-full w-full object-contain p-2.5"
            />
          </div>
          <h3 className="text-job-secondary mx-2 mb-4 line-clamp-2 min-h-[42px] text-center text-sm font-bold sm:mx-4 sm:mb-6 sm:min-h-[54px] sm:text-lg">
            {item.companyName}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 bg-[#F7F7F7] px-[15px] py-3 sm:justify-between">
            <div className="text-job-gray-3 text-xs font-normal sm:text-sm">
              {item.cityName}
            </div>
            <div className="text-job-secondary inline-flex items-center gap-1.5 text-xs font-normal sm:text-sm">
              <span className="relative flex size-3">
                <span className="bg-job-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-job-green/50 relative inline-flex size-3 rounded-full"></span>
              </span>
              {item.totalJob} Việc làm
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
