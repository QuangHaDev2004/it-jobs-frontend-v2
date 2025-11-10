/* eslint-disable @next/next/no-img-element */
import Skeleton from "react-loading-skeleton";

export const CardJobSkeleton = () => {
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
          alt=""
          className="absolute top-0 left-0 h-auto w-full"
        />
        <div className="relative text-center">
          <div className="mx-auto my-5 aspect-square w-[116px] overflow-hidden rounded-lg">
            <Skeleton width="100%" height="100%" />
          </div>
          <h3 className="mx-2 mb-1.5 text-center sm:mx-[16px]">
            <Skeleton height={24} width="80%" />
            <Skeleton height={24} width="60%" />
          </h3>
          <div className="mb-3">
            <Skeleton height={20} width="25%" />
          </div>
          <div className="mb-1.5">
            <Skeleton height={20} width="40%" />
          </div>
          <div className="mb-1.5">
            <Skeleton height={20} width="30%" />
            <Skeleton height={20} width="40%" />
            <Skeleton height={20} width="30%" />
          </div>

          <div className="mx-2 mt-1.5 mb-5">
            <Skeleton height={30} width="80%" />
          </div>
        </div>
      </div>
    </>
  );
};
