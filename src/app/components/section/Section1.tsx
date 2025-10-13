import Link from "next/link"
import { FaMagnifyingGlass } from "react-icons/fa6"

export const Section1 = () => {
  return (
    <>
      <div className="bg-[#000065] py-[60px]">
        <div className="container">
          <h1 className="font-[700] text-[28px] text-white text-center mb-[30px]">
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <form action="" className="flex md:flex-nowrap flex-wrap gap-x-[15px] gap-y-[12px] mb-[30px]">
            <div className="custom-select md:w-[240px] w-full">
              <select
                name=""
                id=""
                className="bg-white w-full h-[56px] rounded-[4px] px-[20px] font-[500] text-[18px] text-[#121212]"
              >
                <option value="">Tất cả</option>
                <option value="">Hà Nội</option>
                <option value="">Đà Nẵng</option>
                <option value="">Hồ Chí Minh</option>
              </select>
            </div>
            <input
              type="text"
              className="bg-white md:flex-1 w-full h-[56px] rounded-[4px] px-[20px] font-[500] text-[18px] text-[#121212]"
              placeholder="Nhập từ khoá..."
            />
            <button className="bg-[#0088FF] flex items-center justify-center gap-[10px] md:w-[240px] w-full h-[56px] rounded-[4px] font-[500] text-[18px] text-white cursor-pointer">
              <FaMagnifyingGlass className="text-[20px]" />
              Tìm Kiếm
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-x-[12px] gap-y-[15px]">
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </div>
            <div className="inline-flex flex-wrap gap-[10px]">
              <Link
                href="#"
                className="bg-[#121212] hover:bg-[#414042] border border-[#414042] px-[22px] py-[8px] rounded-[20px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white"
              >
                ReactJS
              </Link>
              <Link
                href="#"
                className="bg-[#121212] hover:bg-[#414042] border border-[#414042] px-[22px] py-[8px] rounded-[20px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white"
              >
                Javascript
              </Link>
              <Link
                href="#"
                className="bg-[#121212] hover:bg-[#414042] border border-[#414042] px-[22px] py-[8px] rounded-[20px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white"
              >
                NodeJS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}