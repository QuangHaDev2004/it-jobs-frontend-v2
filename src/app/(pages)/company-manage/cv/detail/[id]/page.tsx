import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi tiết CV",
  description: "Mô tả trang chi tiết CV...",
};

export default function CompanyManageCVDetailPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          {/* Thông tin CV */}
          <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap items-center justify-between gap-[20px] mb-[20px]">
              <h1 className="sm:w-auto w-full font-[700] text-[20px]">
                Thông tin CV
              </h1>
              <Link href="#" className="font-[400] text-[14px] text-[#0088FF] underline">
                Quay lại danh sách
              </Link>
            </div>
            <div className="font-[400] text-[16px] mb-[10px]">
              Họ tên: <span className="font-[700]">Lê Văn A</span>
            </div>
            <div className="font-[400] text-[16px] mb-[10px]">
              Email: <span className="font-[700]">levana@gmail.com</span>
            </div>
            <div className="font-[400] text-[16px] mb-[10px]">
              Số điện thoại: <span className="font-[700]">0123456789</span>
            </div>
            <div className="font-[400] text-[16px] mb-[10px]">
              File CV:
            </div>
            <div className="bg-[#D9D9D9] h-[736px]">
              {/* Preview CV */}
              <iframe
                src="https://res.cloudinary.com/dxhwpfxxn/image/upload/v1750249597/bdwguoqukqebm2mokjzk.pdf"
                className="w-full h-full"
              >
              </iframe>
            </div>
          </div>

          {/* Thông tin công việc */}
          <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px] mt-[20px]">
            <h2 className="font-[700] text-[20px] mb-[20px]">
              Thông tin công việc
            </h2>
            <div className="font-[400] text-[16px] mb-[10px]">
              Tên công việc: <span className="font-[700]">Frontend Engineer (ReactJS)</span>
            </div>
            <div className="font-[400] text-[16px] mb-[10px]">
              Mức lương: <span className="font-[700]">1.000$ - 1.500$</span>
            </div>
            <div className="font-[400] text-[16px] mb-[10px]">
              Cấp bậc: <span className="font-[700]">Fresher </span>
            </div>
            <div className="font-[400] text-[16px] mb-[10px]">
              Hình thức làm việc: <span className="font-[700]">Tại văn phòng</span>
            </div>
            <div className="font-[400] text-[16px] mb-[10px]">
              Công nghệ: <span className="font-[700]">HTML5, CSS3, Javascript, ReactJS</span>
            </div>
            <Link href="#" className="font-[400] text-[14px] text-[#0088FF] underline">
              Xem chi tiết công việc
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}