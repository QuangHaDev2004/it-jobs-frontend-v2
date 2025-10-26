/* eslint-disable @next/next/no-img-element */
import { Pagination } from "@/app/components/pagination/Pagination";
import { Metadata } from "next";
import Link from "next/link";
import { FaBriefcase, FaUserTie } from "react-icons/fa6";

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
          <div className="grid grid-cols-1 gap-x-[10px] gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
            <div
              className="relative overflow-hidden rounded-[8px] border border-[#DEDEDE]"
              style={{
                background:
                  "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)",
              }}
            >
              <img
                src="/assets/images/cart-bg.svg"
                alt=""
                className="absolute top-0 left-0 h-auto w-full"
              />
              <div className="relative text-center">
                <div
                  className="mx-auto mt-5 mb-4 aspect-square w-[125px] overflow-hidden rounded-lg bg-white sm:mt-8 sm:mb-6 sm:w-[160px]"
                  style={{
                    boxShadow: "0px 4px 24px 0px #0000001F",
                  }}
                >
                  <img
                    src="/assets/images/demo-cong-ty-1.jpg"
                    alt=""
                    className="h-full w-full object-contain p-[10px]"
                  />
                </div>
                <h3 className="text-job-secondary mx-[8px] mt-[20px] mb-[6px] line-clamp-2 text-center text-[18px] font-bold sm:mx-[16px]">
                  Frontend Engineer (ReactJS)
                </h3>
                <div className="mb-[6px] text-[16px] font-[600] text-[#0088FF]">
                  1.000$ - 1.500$
                </div>
                <div className="text-job-secondary mb-[6px] flex items-center justify-center gap-[8px] text-sm font-normal">
                  <FaUserTie className="text-[16px]" />
                  Fresher
                </div>
                <div className="text-job-secondary flex items-center justify-center gap-[8px] text-sm font-normal">
                  <FaBriefcase className="text-[16px]" />
                  Tại văn phòng
                </div>
                <div className="mt-[12px] mb-[20px] flex flex-wrap items-center justify-center gap-[8px]">
                  <div className="border-job-gray rounded-[20px] border px-[16px] py-[6px] text-[12px] font-normal text-[#414042]">
                    ReactJS
                  </div>
                  <div className="border-job-gray rounded-[20px] border px-[16px] py-[6px] text-[12px] font-normal text-[#414042]">
                    NextJS
                  </div>
                  <div className="border-job-gray rounded-[20px] border px-[16px] py-[6px] text-[12px] font-normal text-[#414042]">
                    Javascript
                  </div>
                </div>
                <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[12px]">
                  <Link
                    href="#"
                    className="inline-block rounded-sm bg-[#FFB200] px-[20px] py-2 text-sm font-normal"
                  >
                    Sửa
                  </Link>
                  <Link
                    href="#"
                    className="inline-block rounded-sm bg-[#FF0000] px-[20px] py-2 text-sm font-normal text-white"
                  >
                    Xóa
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Phân trang */}
          <Pagination />
        </div>
      </div>
    </>
  );
}
