"use client";
import { CardCompanyItem } from "@/components/card/CardCompanyItem";
import { Spinner } from "@/components/loading/Spinner";
import { getCompanyList } from "@/services/company";
import { CompanyDetail } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const CompanyList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["companyList"],
    queryFn: getCompanyList,
  });

  const companyList = data?.companyList ?? [];

  if (isPending) return <Spinner />;

  return (
    <>
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 sm:gap-x-5 lg:grid-cols-3">
        {companyList.map((item: CompanyDetail) => (
          <CardCompanyItem key={item.id} item={item} />
        ))}
      </div>

      {/* Phân trang */}
      {/* <Pagination /> */}
    </>
  );
};
