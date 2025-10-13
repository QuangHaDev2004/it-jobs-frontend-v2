/* eslint-disable @next/next/no-img-element */
import { CardJobItem } from "@/app/components/card/CardJobItem";
import { Metadata } from "next";
import { FaLocationDot } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Chi tiết công ty",
  description: "Mô tả trang chi tiết công ty...",
};

export default function CompanyDetailPage() {
  return (
    <>
      <div className="pt-[30px] pb-[60px]">
        <div className="container">
          {/* Thông tin công ty */}
          <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap items-center gap-[16px] mb-[20px]">
              <div className="w-[100px] aspect-square rounded-[4px] truncate">
                <img
                  src="/assets/images/demo-logo-1.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:flex-1 w-full">
                <div className="font-[700] text-[28px] text-[#121212] mb-[10px]">
                  LG CNS Việt Nam
                </div>
                <div className="flex items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                  <FaLocationDot className="text-[16px]" />
                  Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Mô hình công ty:
                </div>
                <div className="font-[400] text-[16px] text-[#121212]">
                  Sản phẩm
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Quy mô công ty:
                </div>
                <div className="font-[400] text-[16px] text-[#121212]">
                  151 - 300 nhân viên
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Thời gian làm việc:
                </div>
                <div className="font-[400] text-[16px] text-[#121212]">
                  Thứ 2 - Thứ 6
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Làm việc ngoài giờ:
                </div>
                <div className="font-[400] text-[16px] text-[#121212]">
                  Không có OT
                </div>
              </div>
            </div>
          </div>

          {/* Mô tả chi tiết */}
          <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px] mt-[20px]">
            Mô tả chi tiết
          </div>

          {/* Việc làm */}
          <div className="mt-[30px]">
            <h2 className="font-[700] text-[28px] text-[#121212] mb-[20px]">
              Công ty có 6 việc làm
            </h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
              <CardJobItem />
              <CardJobItem />
              <CardJobItem />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}