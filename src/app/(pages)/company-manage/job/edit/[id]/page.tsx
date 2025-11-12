import { Metadata } from "next";
import Link from "next/link";
import { FormEdit } from "./FormEdit";

export const metadata: Metadata = {
  title: "Chỉnh sửa công việc",
  description: "Mô tả trang chỉnh sửa công việc...",
};

export default async function CompanyManageJobEditPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;

  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="rounded-lg bg-white p-5 shadow-md">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-5">
              <h1 className="w-full text-[20px] font-bold sm:w-auto">
                Chỉnh sửa công việc
              </h1>
              <Link
                href="/company-manage/job/list"
                className="text-job-blue-500 text-sm font-normal underline"
              >
                Quay lại danh sách
              </Link>
            </div>
            <FormEdit id={id} />
          </div>
        </div>
      </div>
    </>
  );
}
