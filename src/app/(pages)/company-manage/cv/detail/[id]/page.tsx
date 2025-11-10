import { Metadata } from "next";
import { CVInfo } from "./CVInfo";

export const metadata: Metadata = {
  title: "Chi tiết CV",
  description: "Mô tả trang chi tiết CV...",
};

export default async function CompanyManageCVDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;

  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <CVInfo id={id} />
        </div>
      </div>
    </>
  );
}
