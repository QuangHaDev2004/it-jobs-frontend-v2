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
          <div className="border-job-gray rounded-lg border bg-white p-5">
            <h1 className="mb-5 text-[20px] font-bold">Thông tin cá nhân</h1>
            <FormProfile />
          </div>
        </div>
      </div>
    </>
  );
}
