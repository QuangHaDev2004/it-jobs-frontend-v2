/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Spinner } from "@/components/loading/Spinner";
// import { Pagination } from "@/components/pagination/Pagination";
import { useSaveJobList } from "@/hooks/useSaveJobList";
import { getCVList } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CVAppliedItem } from "./CVAppliedItem";
import { SavedJobItem } from "./SavedJobItem";
import { useRouter, useSearchParams } from "next/navigation";

export const CVList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabUrl = searchParams.get("tab");
  const inititalTab = tabUrl === "saved" ? "saved" : "applied";
  const [activeTab, setActiveTab] = useState<"applied" | "saved">(inititalTab);

  const { data: cvListData, isPending: cvListPending } = useQuery({
    queryKey: ["cvListUser"],
    queryFn: getCVList,
  });
  const cvList = cvListData?.cvs ?? [];
  const { saveJobList } = useSaveJobList();

  const displayList = activeTab === "applied" ? cvList : saveJobList;

  const changeTab = (tab: "applied" | "saved") => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`, { scroll: false });
  };

  if (cvListPending) return <Spinner />;

  return (
    <>
      <div className="mb-5 flex items-center gap-10 rounded-lg bg-white p-5 pb-0 text-[16px] font-semibold shadow-md">
        <button
          onClick={() => changeTab("applied")}
          className={`flex cursor-pointer items-center gap-3 pb-4 ${activeTab === "applied" ? "text-job-red-500 border-job-red-500 border-b-2" : "text-job-secondary"}`}
        >
          Đã ứng tuyển{" "}
          <span
            className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${activeTab === "applied" ? "bg-job-red-500 text-white" : "bg-job-gray-100 text-job-secondary"}`}
          >
            {cvList.length || 0}
          </span>
        </button>
        <button
          onClick={() => changeTab("saved")}
          className={`flex cursor-pointer items-center gap-3 pb-4 ${activeTab === "saved" ? "text-job-red-500 border-job-red-500 border-b-2" : "text-job-secondary"}`}
        >
          Đã lưu{" "}
          <span
            className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${activeTab === "saved" ? "bg-job-red-500 text-white" : "bg-job-gray-100 text-job-secondary"}`}
          >
            {saveJobList.length || 0}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-x-2.5 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
        {displayList.length === 0 ? (
          <div className="text-lg font-bold">
            {activeTab === "applied"
              ? "Bạn chưa ứng tuyển công việc nào"
              : "Bạn chưa lưu công việc nào"}
          </div>
        ) : (
          displayList.map((item: any) =>
            activeTab === "applied" ? (
              <CVAppliedItem key={item.id} item={item} />
            ) : (
              <SavedJobItem key={item.id} item={item} />
            ),
          )
        )}
      </div>

      {/* Phân trang */}
      {/* <Pagination /> */}
    </>
  );
};
