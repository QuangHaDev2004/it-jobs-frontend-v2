/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSaveJobList } from "@/hooks/useSaveJobList";
import { saveJob, unSaveJob } from "@/services/job";
import { useAuthStore } from "@/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { toast } from "sonner";

export const SaveJob = ({ jobId }: { jobId: string }) => {
  const { infoUser } = useAuthStore();
  const queryClient = useQueryClient();

  const { saveJobList } = useSaveJobList();

  const handleSaveJob = async () => {
    try {
      const data = await saveJob(jobId);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["saveJobs"] });
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleUnSaveJob = async () => {
    try {
      const data = await unSaveJob(jobId);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["saveJobs"] });
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const isSave = saveJobList.find((job) => job.jobId === jobId);

  if (!infoUser) return null;

  return (
    <>
      <button className="tooltip text-job-red-500 cursor-pointer">
        <div className="tooltip-content">
          <div className="text-sm">
            {isSave ? "Bỏ lưu công việc này" : "Lưu việc này"}
          </div>
        </div>
        {isSave ? (
          <FaHeart size={30} onClick={handleUnSaveJob} />
        ) : (
          <FaRegHeart size={30} onClick={handleSaveJob} />
        )}
      </button>
    </>
  );
};
