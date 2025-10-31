"use client";
import { useQuery } from "@tanstack/react-query";
import { CardCompanyItem } from "../card/CardCompanyItem";
import { Title } from "../title/Title";
import { getCompanyList } from "@/services/company";
import { CompanyItem } from "@/types";

export const Section2 = () => {
  const { data } = useQuery({
    queryKey: ["companyList"],
    queryFn: getCompanyList,
  });

  const companyList = data?.code === "success" ? data.companyList : [];

  return (
    <div className="py-[60px]">
      <div className="container">
        <Title text="Nhà tuyển dụng hàng đầu" />

        <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 sm:gap-x-5 lg:grid-cols-3">
          {companyList.map((item: CompanyItem) => (
            <CardCompanyItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
