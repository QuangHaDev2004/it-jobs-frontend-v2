import { Metadata } from "next";
import { FormLogin } from "./FormLogin";

export const metadata: Metadata = {
  title: "Đăng nhập (Nhà tuyển dụng)",
  description: "Mô tả trang đăng nhập (Nhà tuyển dụng)...",
};

export default function CompanyLoginPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="mx-auto max-w-[602px] rounded-[8px] border border-gray px-5 py-[50px]">
            <h1 className="mb-5 flex items-center justify-center gap-1 text-center text-[20px] font-bold">
              <span>Đăng nhập</span>
              <span className="text-red">(Nhà tuyển dụng)</span>
            </h1>
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}
