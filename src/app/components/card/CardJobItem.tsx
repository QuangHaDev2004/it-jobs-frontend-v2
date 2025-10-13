/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6";

export const CardJobItem = () => {
  return (
    <>
      <Link
        href="#"
        className="border border-[#DEDEDE] rounded-[8px] relative overflow-hidden"
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
          <div
            className="bg-white w-[116px] aspect-square overflow-hidden rounded-[8px] mx-auto mt-[20px] mb-[20px]"
            style={{
              boxShadow: "0px 4px 24px 0px #0000001F"
            }}
          >
            <img
              src="/assets/images/demo-cong-ty-1.jpg"
              alt=""
              className="w-full h-full object-contain p-[10px]"
            />
          </div>
          <h3 className="font-[700] text-[18px] text-[#121212] text-center sm:mx-[16px] mx-[8px] mb-[6px] line-clamp-2">
            Frontend Engineer (ReactJS)
          </h3>
          <div className="font-normal text-[14px] text-[#121212] mb-[12px]">
            LG CNS Việt Nam
          </div>
          <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
            1.000$ - 1.500$
          </div>
          <div className="flex items-center justify-center gap-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
            <FaUserTie className="text-[16px]" />
            Fresher
          </div>
          <div className="flex items-center justify-center gap-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
            <FaBriefcase className="text-[16px]" />
            Tại văn phòng
          </div>
          <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212]">
            <FaLocationDot className="text-[16px]" />
            Ha Noi
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
        </div>
      </Link>
    </>
  )
}