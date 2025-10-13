import Link from "next/link"
import { FaUserTie } from "react-icons/fa6"

/* eslint-disable @next/next/no-img-element */
export const CardCompanyItem = (props: {
  link: string,
  image: string,
  name: string,
  address: string,
  quantity: number
}) => {
  const { link, image, name, address, quantity } = props;

  return (
    <>
      <Link
        href={link}
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
        <div className="relative">
          <div
            className="bg-white sm:w-[160px] w-[125px] aspect-square overflow-hidden rounded-[8px] mx-auto sm:mt-[32px] mt-[20px] sm:mb-[24px] mb-[16px]"
            style={{
              boxShadow: "0px 4px 24px 0px #0000001F"
            }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-contain p-[10px]"
            />
          </div>
          <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center sm:mx-[16px] mx-[8px] sm:mb-[24px] mb-[16px] line-clamp-2 sm:min-h-[54px] min-h-[42px]">
            {name}
          </h3>
          <div className="bg-[#F7F7F7] flex flex-wrap gap-[12px] items-center sm:justify-between justify-center px-[15px] py-[12px]">
            <div className="font-[400] sm:text-[14px] text-[12px] text-[#414042]">
              {address}
            </div>
            <div className="inline-flex items-center gap-[6px] font-[400] sm:text-[14px] text-[12px] text-[#121212]">
              <FaUserTie className="text-[16px] text-[#000096]" />
              {quantity} Việc làm
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}