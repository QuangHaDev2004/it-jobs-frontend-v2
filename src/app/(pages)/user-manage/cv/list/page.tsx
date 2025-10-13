/* eslint-disable @next/next/no-img-element */
import { Pagination } from "@/app/components/pagination/Pagination";
import { Metadata } from "next";
import Link from "next/link";
import { FaBriefcase, FaCircleCheck, FaUserTie } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Quản lý CV đã gửi",
  description: "Mô tả trang quản lý CV đã gửi...",
};

export default function UserManageCVListPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <h1 className="font-[700] text-[24px] text-[#121212] mb-[20px]">Quản lý CV đã gửi</h1>

          {/* Danh sách CV */}
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
                <h3 className="font-[700] text-[18px] text-[#121212] sm:mx-[16px] mx-[8px] mb-[12px] line-clamp-2 mt-[20px]">
                  Frontend Engineer (ReactJS)
                </h3>
                <div className="font-[400] text-[14px] text-[#121212] mb-[6px]">
                  Công ty: <span className="font-[700]">Công ty ABC</span>
                </div>
                <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                  1.000$ - 1.500$
                </div>
                <div className="flex items-center justify-center gap-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                  <FaUserTie className="text-[16px]" />
                  Fresher
                </div>
                <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
                  <FaBriefcase className="text-[16px]" />
                  Tại văn phòng
                </div>
                <div className="">
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                    <FaCircleCheck className="text-[16px]" />
                    Chưa duyệt
                  </div>
                  {/* <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#47BE02]">
                    <FaCircleCheck className="text-[16px]" />
                    Đã duyệt
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#FF5100]">
                    <FaCircleCheck className="text-[16px]" />
                    Từ chối
                  </div> */}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-[8px] mx-[8px] mb-[20px] mt-[12px]">
                  <Link
                    href="#"
                    className="bg-[#0088FF] inline-block px-[20px] py-[8px] rounded-[4px] font-[400] text-[14px] text-white"
                  >
                    Xem
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#FF0000] inline-block px-[20px] py-[8px] rounded-[4px] font-[400] text-[14px] text-white"
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
  )
}