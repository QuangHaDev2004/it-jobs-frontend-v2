/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";

export const CardCompanyItem = ({
  link,
  image,
  name,
  address,
  quantity,
}: {
  link: string;
  image: string;
  name: string;
  address: string;
  quantity: number;
}) => {
  return (
    <>
      <Link
        href={link}
        className="border-gray relative overflow-hidden rounded-[8px] border transition-all duration-300 hover:shadow-xl"
        style={{
          background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)",
        }}
      >
        <img
          src="/assets/images/cart-bg.svg"
          alt=""
          className="absolute top-0 left-0 h-auto w-full"
        />
        <div className="relative">
          <div
            className="mx-auto mt-5 mb-4 aspect-square w-[125px] overflow-hidden rounded-lg bg-white sm:mt-8 sm:mb-6 sm:w-[160px]"
            style={{
              boxShadow: "0px 4px 24px 0px #0000001F",
            }}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full object-contain p-[10px]"
            />
          </div>
          <h3 className="text-secondary mx-2 mb-4 line-clamp-2 min-h-[42px] text-center text-sm font-bold sm:mx-4 sm:mb-[24px] sm:min-h-[54px] sm:text-lg">
            {name}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 bg-[#F7F7F7] px-[15px] py-3 sm:justify-between">
            <div className="text-gray-3 text-xs font-normal sm:text-sm">
              {address}
            </div>
            <div className="text-secondary inline-flex items-center gap-1.5 text-xs font-normal sm:text-sm">
              <span className="relative flex size-3">
                <span className="bg-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-green/50 relative inline-flex size-3 rounded-full"></span>
              </span>
              {quantity} Việc làm
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
