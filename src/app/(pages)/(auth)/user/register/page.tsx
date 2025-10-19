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
          <div className="border-gray mx-auto max-w-[602px] rounded-lg border px-5 py-[50px]">
            <h1 className="mb-5 text-center text-xl font-bold">
              Đăng ký (Ứng viên)
            </h1>
            <FormRegister />
          </div>
        </div>
      </div>
    </>
  );
}
