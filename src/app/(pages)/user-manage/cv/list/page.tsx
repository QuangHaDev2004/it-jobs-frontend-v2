import { Metadata } from "next";
import { CVList } from "./CVList";

export const metadata: Metadata = {
  title: "Quản lý CV đã gửi",
  description: "Mô tả trang quản lý CV đã gửi...",
};

export default function UserManageCVListPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <h1 className="text-job-secondary mb-5 text-2xl font-bold">
            Quản lý CV đã gửi
          </h1>
          <CVList />
        </div>
      </div>
    </>
  );
}
