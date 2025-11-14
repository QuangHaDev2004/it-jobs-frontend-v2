export const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-[500px]">
      <div className="border-job-gray-100 border-t-job-gray-500 h-10 w-10 animate-spin rounded-full border-4"></div>
      <div className="text-lg font-semibold text-rose-950">
        Đang tải dữ liệu...
      </div>
    </div>
  );
};
