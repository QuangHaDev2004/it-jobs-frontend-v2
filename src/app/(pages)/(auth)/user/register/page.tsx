import { Metadata } from "next";
import { FormRegister } from "./FormRegister";

export const metadata: Metadata = {
  title: "Đăng ký (Ứng viên)",
  description: "Mô tả trang đăng ký (Ứng viên)...",
};

export default function CompanyRegisterPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="max-w-[602px] mx-auto border border-[#DEDEDE] rounded-[8px] px-[20px] py-[50px]">
            <h1 className="font-[700] text-[20px] text-center mb-[20px]">
              Đăng ký (Ứng viên)
            </h1>
            <FormRegister />
          </div>
        </div>
      </div>
    </>
  )
}