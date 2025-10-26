import { Metadata } from "next";
import Link from "next/link";
import JobList from "./JobList";
import { Pagination } from "@/components/pagination/Pagination";

export const metadata: Metadata = {
  title: "Quản lý công việc",
  description: "Mô tả trang quản lý công việc...",
};

export default function CompanyManageJobListPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-5">
            <h1 className="text-job-secondary text-2xl font-bold">
              Quản lý công việc
            </h1>
            <Link
              href="/company-manage/job/create"
              className="bg-job-blue rounded-sm px-5 py-2 text-sm font-normal text-white hover:brightness-95"
            >
              Thêm mới
            </Link>
          </div>

          {/* Danh sách công việc */}
          <JobList />

          {/* Phân trang */}
          <Pagination />
        </div>
      </div>
    </>
  );
}
