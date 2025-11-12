import { CardCompanyItem } from "../card/CardCompanyItem";
import { Title } from "../title/Title";
import { getCompanyList } from "@/services/company";
import { CompanyDetail } from "@/types";

export const Section2 = async () => {
  let companyList: CompanyDetail[] = [];
  try {
    const data = await getCompanyList();
    companyList = data.companyList;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="py-[60px]">
      <div className="container">
        <Title text="Nhà tuyển dụng hàng đầu" />
        <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 sm:gap-x-5 lg:grid-cols-3">
          {companyList.map((item: CompanyDetail) => (
            <CardCompanyItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
