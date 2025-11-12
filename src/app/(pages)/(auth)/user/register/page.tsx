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
          <div className="mx-auto max-w-[602px] rounded-lg bg-white px-5 py-[50px] shadow-md">
            <h1 className="mb-5 flex items-center justify-center gap-1 text-center text-[20px] font-bold">
              <span>Đăng ký</span>
              <span className="text-job-red-500">(Ứng viên)</span>
            </h1>
            <FormRegister />
          </div>
        </div>
      </div>
    </>
  );
}
