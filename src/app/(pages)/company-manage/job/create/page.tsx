import { Metadata } from "next";
import Link from "next/link";
import { FormCreate } from "./FormCreate";

export const metadata: Metadata = {
  title: "Thêm mới công việc",
  description: "Mô tả trang thêm mới công việc...",
};

export default function CompanyManageJobCreatePage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="rounded-lg bg-white p-5 shadow-md">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-5">
              <h1 className="w-full text-[20px] font-bold sm:w-auto">
                Thêm mới công việc
              </h1>
              <Link
                href="/company-manage/job/list"
                className="text-job-blue-500 text-sm font-normal underline"
              >
                Quay lại danh sách
              </Link>
            </div>
            <FormCreate />
          </div>
        </div>
      </div>
    </>
  );
}
