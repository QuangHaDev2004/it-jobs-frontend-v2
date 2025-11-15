import { Metadata } from "next";
import { CVList } from "./CVList";

export const metadata: Metadata = {
  title: "Việc làm của tôi",
  description: "Mô tả trang Việc làm của tôi...",
};

export default function UserManageCVListPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <h1 className="text-job-secondary mb-5 text-2xl font-bold">
            Việc làm của tôi
          </h1>
          <CVList />
        </div>
      </div>
    </>
  );
}
