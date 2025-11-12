import { Metadata } from "next";
import { FormProfile } from "./FormProfile";

export const metadata: Metadata = {
  title: "Thông tin công ty",
  description: "Mô tả trang thông tin công ty...",
};

export default function CompanyProfilePage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="rounded-lg bg-white p-5 shadow-md">
            <h1 className="mb-5 text-[20px] font-bold text-black">
              Thông tin công ty
            </h1>
            <FormProfile />
          </div>
        </div>
      </div>
    </>
  );
}
