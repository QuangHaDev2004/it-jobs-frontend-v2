import { getSaveJobs } from "@/services/job";
import { useAuthStore } from "@/store/useAuthStore";
import { SaveJobDetail } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useSaveJobList = () => {
  const { infoUser } = useAuthStore();

  const { data } = useQuery({
    queryKey: ["saveJobs"],
    queryFn: getSaveJobs,
    enabled: !!infoUser,
  });

  const saveJobList: SaveJobDetail[] = data?.saveJobs ?? [];

  return {
    saveJobList,
  };
};
