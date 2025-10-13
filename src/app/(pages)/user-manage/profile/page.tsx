import { Metadata } from "next";
import { FormProfile } from "./FormProfile";

export const metadata: Metadata = {
  title: "Thông tin cá nhân",
  description: "Mô tả trang thông tin cá nhân...",
};

export default function UserManageProfilePage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <h1 className="font-[700] text-[20px] mb-[20px]">
              Thông tin cá nhân
            </h1>
            <FormProfile />
          </div>
        </div>
      </div>
    </>
  )
}