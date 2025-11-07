/* eslint-disable @next/next/no-img-element */
export const EmptyState = () => {
  return (
    <div className="border-job-gray overflow-hidden rounded-md border p-5 text-center shadow-md sm:p-10">
      <div className="mx-auto aspect-square w-[120px] sm:w-40">
        <img
          src="/assets/images/not-found.jpg"
          alt="Not Found"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="text-sm font-bold sm:text-[22px]">
        Xin lỗi! Việc làm bạn đang tìm kiếm không tồn tại.
      </p>
    </div>
  );
};
