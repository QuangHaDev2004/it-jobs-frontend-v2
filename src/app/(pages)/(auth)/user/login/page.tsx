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
          <div className="border-gray mx-auto max-w-[602px] rounded-lg border px-5 py-[50px]">
            <h1 className="mb-5 text-center text-xl font-bold">
              Đăng nhập (Ứng viên)
            </h1>
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}
