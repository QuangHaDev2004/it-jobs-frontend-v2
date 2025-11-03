import { CardJobItem } from "@/app/components/card/CardJobItem";
import { Pagination } from "@/app/components/pagination/Pagination";
import { Section1 } from "@/components/section/Section1";
import { positionList, workingFormList } from "@/constants/options";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Kết quả tìm kiếm công việc...",
};

export default function SearchPage() {
  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End Section 1 */}

      {/* Kết quả tìm kiếm */}
      <div className="py-[60px]">
        <div className="container">
          <h2 className="text-job-secondary mb-[30px] text-[28px] font-bold">
            76 việc làm <span className="text-job-blue">reactjs</span>
          </h2>

          {/* Bộ lọc */}
          <div
            className="mb-[30px] flex flex-wrap items-center gap-3 rounded-lg px-5 py-2.5"
            style={{
              boxShadow: "0px 4px 20px 0px #0000000F",
            }}
          >
            <select
              name="position"
              id="position"
              className="select border-job-gray text-job-gray-3 h-9 w-[148px] rounded-[20px] border bg-white px-[18px] text-[16px] font-normal"
            >
              <option
                value=""
                className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
              >
                Cấp bậc
              </option>
              {positionList.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
                >
                  {item.label}
                </option>
              ))}
            </select>
            <select
              name="workingForm"
              id="workingForm"
              className="select border-job-gray text-job-gray-3 h-9 w-[206px] rounded-[20px] border bg-white px-[18px] text-[16px] font-normal"
            >
              <option value="">Hình thức làm việc</option>
              {workingFormList.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Danh sách công việc */}
          <div className="grid grid-cols-1 gap-x-[10px] gap-y-[20px] sm:grid-cols-2 sm:gap-x-[20px] lg:grid-cols-3">
            <CardJobItem />
          </div>

          {/* Phân trang */}
          <Pagination />
        </div>
      </div>
      {/* Hết Kết quả tìm kiếm */}
    </>
  );
}
