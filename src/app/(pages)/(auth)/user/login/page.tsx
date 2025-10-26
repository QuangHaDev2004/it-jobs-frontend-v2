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
          <div className="border-job-gray mx-auto max-w-[602px] rounded-lg border px-5 py-[50px]">
            <h1 className="mb-5 flex items-center justify-center gap-1 text-center text-[20px] font-bold">
              <span>Đăng nhập</span>
              <span className="text-job-red">(Ứng viên)</span>
            </h1>
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}
