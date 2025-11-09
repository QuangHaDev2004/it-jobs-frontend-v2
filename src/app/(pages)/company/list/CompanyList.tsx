"use client";
import { CardCompanyItem } from "@/components/card/CardCompanyItem";
import { CardCompanySkeleton } from "@/components/skeleton/CardCompanySkeleton";
import { getCompanyList } from "@/services/company";
import { CompanyDetail } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const CompanyList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["companyList"],
    queryFn: getCompanyList,
  });

  const companyList = data?.code === "success" ? data.companyList : [];

  return (
    <>
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 sm:gap-x-5 lg:grid-cols-3">
        {isLoading
          ? Array(6)
              .fill("")
              .map((_, index) => <CardCompanySkeleton key={index} />)
          : companyList.map((item: CompanyDetail) => (
              <CardCompanyItem key={item.id} item={item} />
            ))}
      </div>

      {/* Phân trang */}
      {/* <Pagination /> */}
    </>
  );
};
