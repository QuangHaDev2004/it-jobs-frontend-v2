import { Title } from "@/components/title/Title";
import { Metadata } from "next";
import { CompanyList } from "./CompanyList";

export const metadata: Metadata = {
  title: "Danh sách công ty",
  description: "Mô tả trang danh sách công ty...",
};

export default function CompanyListPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <Title text="Danh sách công ty" />
          <CompanyList />
        </div>
      </div>
    </>
  );
}
