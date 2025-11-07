"use client";
import { CardJobItem } from "@/app/components/card/CardJobItem";
import { SearchSkeleton } from "@/app/components/card/SearchSkeleton";
import { EmptyState } from "@/components/common/EmptyState";
import { Pagination } from "@/components/pagination/Pagination";
import { positionList, workingFormList } from "@/constants/options";
import { searchJob } from "@/services/job";
import { JobItem } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchContainer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = searchParams.get("language") || "";
  const city = searchParams.get("city") || "";
  const company = searchParams.get("company") || "";
  const keyword = searchParams.get("keyword") || "";
  const position = searchParams.get("position") || "";
  const workingForm = searchParams.get("workingForm") || "";

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [
      "searchJob",
      { language, city, company, keyword, position, workingForm },
    ],
    queryFn: () =>
      searchJob({ language, city, company, keyword, position, workingForm }),
    placeholderData: keepPreviousData,
  });

  const jobList = data?.jobs || [];

  const handleJobFilter = (
    key: string,
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const params = new URLSearchParams(searchParams);
    const value = event.target.value;

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const jobCountText = `${jobList.length} việc làm`;
  const locationText = city || company || "Việt Nam";
  let highlightText = "";
  if (language) highlightText += language + " ";
  if (company) highlightText += "đang tuyển dụng";
  if (keyword) highlightText += keyword;

  const isEmpty = !isLoading && !isFetching && jobList.length === 0;

  if (isLoading) return <SearchSkeleton />;
  if (isEmpty) return <EmptyState />;

  return (
    <>
      <h2 className="text-job-secondary mb-[30px] text-[28px] font-bold">
        {jobCountText}{" "}
        <span className="text-job-blue">{highlightText.trim()}</span> tại{" "}
        <span>{locationText}</span>
      </h2>

      {/* Bộ lọc */}
      <div
        className="mb-[30px] flex flex-wrap items-center gap-3 rounded-lg px-5 py-2.5"
        style={{
          boxShadow: "0px 4px 20px 0px #0000000F",
        }}
      >
        <select
          onChange={(event) => handleJobFilter("position", event)}
          defaultValue={position}
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
          onChange={(event) => handleJobFilter("workingForm", event)}
          defaultValue={workingForm}
          name="workingForm"
          id="workingForm"
          className="select border-job-gray text-job-gray-3 h-9 w-[206px] rounded-[20px] border bg-white px-[18px] text-[16px] font-normal"
        >
          <option
            value=""
            className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
          >
            Hình thức làm việc
          </option>
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
      <div className="grid grid-cols-1 gap-x-2.5 gap-y-[20px] sm:grid-cols-2 sm:gap-x-[20px] lg:grid-cols-3">
        {jobList.map((item: JobItem) => (
          <CardJobItem key={item.id} item={item} />
        ))}
      </div>

      {/* Phân trang */}
      {/* <Pagination /> */}
    </>
  );
};
