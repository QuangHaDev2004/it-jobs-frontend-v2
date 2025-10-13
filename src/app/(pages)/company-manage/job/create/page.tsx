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
          <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap items-center justify-between gap-[20px] mb-[20px]">
              <h1 className="sm:w-auto w-full font-[700] text-[20px]">
                Thêm mới công việc
              </h1>
              <Link href="#" className="font-[400] text-[14px] text-[#0088FF] underline">
                Quay lại danh sách
              </Link>
            </div>
            <FormCreate />
          </div>
        </div>
      </div>
    </>
  )
}