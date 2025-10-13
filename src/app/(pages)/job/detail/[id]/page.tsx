/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";
import { FaArrowRightLong, FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Chi tiết công việc",
  description: "Mô tả trang chi tiết công việc...",
};

export default function JobDetailPage() {
  return (
    <>
      <div className="pt-[30px] pb-[60px]">
        <div className="container">
          {/* Wrap */}
          <div className="flex flex-wrap gap-[20px]">
            {/* Left */}
            <div className="lg:w-[65%] w-full">
              {/* Thông tin công việc */}
              <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px]">
                <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[10px]">
                  Front End Developer ( Javascript, ReactJS)
                </h1>
                <div className="font-[400] text-[16px] text-[#414042] mb-[10px]">
                  LG CNS Việt Nam
                </div>
                <div className="font-[700] text-[20px] text-[#0088FF] sm:mb-[20px] mb-[10px]">
                  1.000$ - 1.500$
                </div>
                <Link
                  href="#"
                  className="bg-[#0088FF] rounded-[4px] block h-[48px] font-[700] text-[16px] text-white text-center p-[14px] cursor-pointer mb-[20px]"
                >
                  Ứng tuyển
                </Link>
                <div className="grid grid-cols-3 sm:gap-[16px] gap-[8px] mb-[20px]">
                  <img
                    src="/assets/images/demo-banner-1.jpg"
                    alt=""
                    className="w-full aspect-[232/145] object-cover rounded-[4px]"
                  />
                  <img
                    src="/assets/images/demo-banner-2.jpg"
                    alt=""
                    className="w-full aspect-[232/145] object-cover rounded-[4px]"
                  />
                  <img
                    src="/assets/images/demo-banner-3.jpg"
                    alt=""
                    className="w-full aspect-[232/145] object-cover rounded-[4px]"
                  />
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                  <FaUserTie className="text-[16px]" />
                  Fresher
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                  <FaBriefcase className="text-[16px]" />
                  Tại văn phòng
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                  <FaLocationDot className="text-[16px]" />
                  Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi
                </div>
                <div className="flex flex-wrap items-center gap-[8px]">
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
              </div>
              {/* Mô tả chi tiết */}
              <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px] mt-[20px]">
                Mô tả chi tiết
              </div>
              {/* Form ứng tuyển */}
              <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px] mt-[20px]">
                <h2 className="font-[700] text-[20px] text-black mb-[20px]">
                  Ứng tuyển ngay
                </h2>
                <form
                  action=""
                  className="flex flex-col gap-[15px]"
                >
                  <div className="">
                    <label htmlFor="fullName" className="font-[500] text-[14px] text-black mb-[5px]">
                      Họ tên *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="email" className="font-[500] text-[14px] text-black mb-[5px]">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="phone" className="font-[500] text-[14px] text-black mb-[5px]">
                      Số điện thoại *
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="fileCV" className="font-[500] text-[14px] text-black mb-[5px]">
                      File CV dạng PDF *
                    </label>
                    <input
                      id="fileCV"
                      type="file"
                      className="file:py-[12px] w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
                    />
                  </div>
                  <button className="bg-[#0088FF] rounded-[4px] w-full h-[48px] font-[700] text-[16px] text-white cursor-pointer">
                    Gửi CV ứng tuyển
                  </button>
                </form>
              </div>
            </div>
            {/* Right */}
            <div className="flex-1">
              {/* Thông tin công ty */}
              <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px]">
                <div className="flex gap-[12px] mb-[20px]">
                  <div className="w-[100px] aspect-square rounded-[4px] truncate">
                    <img
                      src="/assets/images/demo-logo-1.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-[700] text-[18px] text-[#121212] mb-[10px]">
                      LG CNS Việt Nam
                    </div>
                    <Link href="#" className="flex items-center gap-[8px] font-[400] text-[16px] text-[#0088FF]">
                      Xem công ty <FaArrowRightLong className="text-[16px]" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Mô hình công ty
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212] text-right">
                      Sản phẩm
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Quy mô công ty
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212] text-right">
                      151 - 300 nhân viên
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Thời gian làm việc
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212] text-right">
                      Thứ 2 - Thứ 6
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Làm việc ngoài giờ
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212] text-right">
                      Không có OT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}