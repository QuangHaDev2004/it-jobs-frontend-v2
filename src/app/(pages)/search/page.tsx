import { Metadata } from "next";
import { Section1 } from "@/components/section/Section1";
import { SearchContainer } from "./SearchContainer";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Kết quả tìm kiếm công việc...",
};

export default function SearchPage() {
  return (
    <>
      {/* Section 1 */}
      <Section1 />

      {/* Kết quả tìm kiếm */}
      <div className="py-[60px]">
        <div className="container">
          <SearchContainer />
        </div>
      </div>
    </>
  );
}
