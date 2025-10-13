import { Metadata } from "next";
import { FormRegister } from "./FormRegister";

export const metadata: Metadata = {
  title: "Đăng ký (Nhà tuyển dụng)",
  description: "Mô tả trang đăng ký (Nhà tuyển dụng)...",
};

export default function CompanyRegisterPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="max-w-[602px] mx-auto border border-[#DEDEDE] rounded-[8px] px-[20px] py-[50px]">
            <h1 className="font-[700] text-[20px] text-center mb-[20px]">
              Đăng ký (Nhà tuyển dụng)
            </h1>
            <FormRegister />
          </div>
        </div>
      </div>
    </>
  )
}