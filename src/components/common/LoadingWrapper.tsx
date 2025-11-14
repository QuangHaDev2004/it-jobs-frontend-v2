import { ReactNode } from "react";

export const LoadingWrapper = ({
  isLoading,
  children,
  minHeight = "70vh",
}: {
  isLoading: boolean;
  children: ReactNode;
  minHeight?: string;
}) => {
  if (isLoading) {
    return (
      <div
        className="text-job-gray-900 flex items-center justify-center text-sm font-bold"
        style={{ minHeight }}
      >
        Đang tải dữ liệu...
      </div>
    );
  }

  return <>{children}</>;
};
