import { CardJobSkeleton } from "@/components/CardJobSkeleton";
import Skeleton from "react-loading-skeleton";

export const SearchSkeleton = () => {
  return (
    <>
      <div className="mb-[26px]">
        <Skeleton height={42} width="60%" borderRadius={6} />
      </div>

      {/* Filter */}
      <div
        className="mb-[30px] flex flex-wrap items-center gap-3 rounded-lg px-5 py-2.5"
        style={{
          boxShadow: "0px 4px 20px 0px #0000000F",
        }}
      >
        <Skeleton height={36} width={148} borderRadius={20} />
        <Skeleton height={36} width={206} borderRadius={20} />
      </div>

      {/* Job List */}
      <div className="grid grid-cols-1 gap-x-2.5 gap-y-[20px] sm:grid-cols-2 sm:gap-x-[20px] lg:grid-cols-3">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <CardJobSkeleton key={index} />
          ))}
      </div>
    </>
  );
};
