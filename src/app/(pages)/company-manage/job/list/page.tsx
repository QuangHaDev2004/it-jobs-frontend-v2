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
          <div className="flex flex-wrap items-center justify-between gap-[20px] mb-[20px]">
            <h1 className="font-[700] text-[24px] text-[#121212]">Quản lý công việc</h1>
            <Link href="#" className="bg-[#0088FF] rounded-[4px] px-[20px] py-[8px] font-[400] text-[14px] text-white">
              Thêm mới
            </Link>
          </div>

          {/* Danh sách công việc */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            <div
              className="border border-[#DEDEDE] rounded-[8px] relative truncate"
              style={{
                background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img
                src="/assets/images/cart-bg.svg"
                alt=""
                className="absolute top-0 left-0 w-full h-auto"
              />
              <div className="relative text-center">
                <h3 className="font-[700] text-[18px] text-[#121212] text-center sm:mx-[16px] mx-[8px] mb-[6px] line-clamp-2 mt-[20px]">
                  Frontend Engineer (ReactJS)
                </h3>
                <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                  1.000$ - 1.500$
                </div>
                <div className="flex items-center justify-center gap-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                  <FaUserTie className="text-[16px]" />
                  Fresher
                </div>
                <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                  <FaBriefcase className="text-[16px]" />
                  Tại văn phòng
                </div>
                <div className="flex flex-wrap items-center justify-center gap-[8px] mt-[12px] mb-[20px]">
                  <div className="border border-[#DEDEDE] rounded-[20px] font-[400] text-[12px] text-[#414042] px-[16px] py-[6px]">
                    ReactJS
                  </div>
                  <div className="border border-[#DEDEDE] rounded-[20px] font-[400] text-[12px] text-[#414042] px-[16px] py-[6px]">
                    NextJS
                  </div>
                  <div className="border border-[#DEDEDE] rounded-[20px] font-[400] text-[12px] text-[#414042] px-[16px] py-[6px]">
                    Javascript
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-[12px] mb-[20px]">
                  <Link href="#" className="bg-[#FFB200] inline-block px-[20px] py-[8px] rounded-[4px] font-[400] text-[14px]">
                    Sửa
                  </Link>
                  <Link href="#" className="bg-[#FF0000] inline-block px-[20px] py-[8px] rounded-[4px] font-[400] text-[14px] text-white">
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
  )
}