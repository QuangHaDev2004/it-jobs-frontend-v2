import { Metadata } from "next";
import { FormLogin } from "./FormLogin";

export const metadata: Metadata = {
  title: "Đăng nhập (Ứng viên)",
  description: "Mô tả trang đăng nhập (Ứng viên)...",
};

export default function CompanyLoginPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="max-w-[602px] mx-auto border border-[#DEDEDE] rounded-[8px] px-[20px] py-[50px]">
            <h1 className="font-[700] text-[20px] text-center mb-[20px]">
              Đăng nhập (Ứng viên)
            </h1>
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  )
}