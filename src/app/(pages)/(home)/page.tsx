import { Section1 } from "@/components/section/Section1";
import { CardCompanyItem } from "../../components/card/CardCompanyItem";
import { Title } from "@/components/title/Title";

export default function HomePage() {
  const companyList = [
    {
      link: "#",
      image: "/assets/images/demo-cong-ty-1.jpg",
      name: "LG Electronics Development Vietnam (LGEDV)",
      address: "Ho Chi Minh",
      quantity: 5,
    },
    {
      link: "#",
      image: "/assets/images/demo-cong-ty-2.jpg",
      name: "MB Bank",
      address: "Ho Chi Minh",
      quantity: 5,
    },
    {
      link: "#",
      image: "/assets/images/demo-cong-ty-3.jpg",
      name: "FPT Software",
      address: "Ho Chi Minh",
      quantity: 5,
    },
  ];

  return (
    <>
      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="container">
          <Title text="Nhà tuyển dụng hàng đầu" />

          {/* Wrap */}
          <div className="grid grid-cols-2 gap-x-[10px] gap-y-5 sm:gap-x-5 lg:grid-cols-3">
            {/* Item */}
            {companyList.map((item, index) => (
              <CardCompanyItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
