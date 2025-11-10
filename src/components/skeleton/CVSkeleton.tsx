/* eslint-disable @next/next/no-img-element */
import Skeleton from "react-loading-skeleton";

export const CVSkeleton = () => {
  return (
    <>
      <div
        className="border-job-gray relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-2xl"
        style={{
          background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)",
        }}
      >
        <img
          src="/assets/images/cart-bg.svg"
          alt="Background"
          className="absolute top-0 left-0 h-auto w-full"
        />
        <div className="relative text-center">
          <h3 className="mx-2 mt-5 mb-3 sm:mx-4">
            <Skeleton height={24} width="60%" />
            <Skeleton height={24} width="80%" />
          </h3>
          <div className="mb-3">
            <Skeleton height={20} width="40%" />
            <Skeleton height={20} width="50%" />
            <Skeleton height={20} width="30%" />
          </div>
          <div>
            <Skeleton height={20} width="20%" />
            <Skeleton height={20} width="30%" />
            <Skeleton height={20} width="20%" />
            <Skeleton height={20} width="30%" />
          </div>
          <div className="mx-2 mt-3 mb-5 flex flex-wrap items-center justify-center gap-2">
            <Skeleton height={36} width={70} borderRadius={8} />
            <Skeleton height={36} width={70} borderRadius={8} />
            <Skeleton height={36} width={70} borderRadius={8} />
            <Skeleton height={36} width={70} borderRadius={8} />
          </div>
        </div>
      </div>
    </>
  );
};
