/* eslint-disable @next/next/no-img-element */
import Skeleton from "react-loading-skeleton";

export const CardCompanySkeleton = () => {
  return (
    <>
      <div
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
          <div className="mx-auto mt-5 mb-4 aspect-square w-[125px] overflow-hidden rounded-lg sm:mt-8 sm:mb-6 sm:w-40">
            <Skeleton height="100%" width="100%" />
          </div>
          <h3 className="text-job-secondary mx-2 mb-4 text-center sm:mx-4 sm:mb-6">
            <Skeleton width="100%" height={24} />
            <Skeleton width="60%" height={24} className="mt-1" />
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 bg-[#F7F7F7] px-[15px] py-3 sm:justify-between">
            <Skeleton height={20} width={80} />
            <Skeleton height={20} width={80} />
          </div>
        </div>
      </div>
    </>
  );
};
