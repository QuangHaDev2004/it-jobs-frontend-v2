import Skeleton from "react-loading-skeleton";

export const CVInfoSkeleton = () => {
  return (
    <>
      <div className="rounded-lg bg-white p-5 shadow-md">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-5">
          <h1 className="w-full text-[20px] font-bold sm:w-auto">
            Thông tin CV
          </h1>
          <div className="text-job-blue text-sm font-normal underline">
            Quay lại danh sách
          </div>
        </div>
        <div className="mb-2.5">
          Họ tên: <Skeleton width={150} height={20} />
        </div>
        <div className="mb-2.5">
          Email: <Skeleton width={300} height={20} />
        </div>
        <div className="mb-2.5">
          Số điện thoại: <Skeleton width={100} height={20} />
        </div>
        <div className="mb-2.5">File CV:</div>
        <div className="h-[736px] bg-[#D9D9D9]"></div>
      </div>

      <div className="mt-[20px] rounded-lg bg-white p-5 shadow-md">
        <h2 className="mb-5 text-[20px] font-bold">Thông tin công việc</h2>
        <div className="mb-2.5">
          Tên công việc: <Skeleton width="70%" height={20} />
        </div>
        <div className="mb-2.5">
          Mức lương: <Skeleton width={150} height={20} />
        </div>
        <div className="mb-2.5">
          Cấp bậc: <Skeleton width={80} height={20} />
        </div>
        <div className="mb-2.5">
          Hình thức làm việc: <Skeleton width={80} height={20} />
        </div>
        <div className="mb-2.5">
          Công nghệ: <Skeleton width="50%" height={20} />
        </div>
        <div className="text-job-blue text-sm font-normal underline">
          Xem chi tiết công việc
        </div>
      </div>
    </>
  );
};
