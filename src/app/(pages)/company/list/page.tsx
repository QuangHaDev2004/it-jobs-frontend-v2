import { CardCompanyItem } from "@/app/components/card/CardCompanyItem";
import { Pagination } from "@/app/components/pagination/Pagination";
import { Title } from "@/components/title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách công ty",
  description: "Mô tả trang danh sách công ty...",
};

export default function CompanyListPage() {
  const companyList = [
    {
      link: "#",
      image: "/assets/images/demo-cong-ty-1.jpg",
      name: "LG Electronics Development Vietnam (LGEDV)",
      address: "Ho Chi Minh",
      quantity: 5
    },
    {
      link: "#",
      image: "/assets/images/demo-cong-ty-2.jpg",
      name: "MB Bank",
      address: "Ho Chi Minh",
      quantity: 5
    },
    {
      link: "#",
      image: "/assets/images/demo-cong-ty-3.jpg",
      name: "FPT Software",
      address: "Ho Chi Minh",
      quantity: 5
    }
  ]

  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <Title text="Danh sách công ty" />

          {/* Wrap */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {/* Item */}
            {companyList.map((item, index) => (
              <CardCompanyItem
                key={index}
                {...item}
              />
            ))}
          </div>

          {/* Phân trang */}
          <Pagination />
        </div>
      </div>
    </>
  )
}