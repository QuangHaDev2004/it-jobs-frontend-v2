import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "@/services/auth";
import { usePathname } from "next/navigation";

export const useAuth = () => {
  const pathname = usePathname();
  const { data, isLoading } = useQuery({
    queryKey: ["checkAuth", pathname],
    queryFn: checkAuth,
  });

  const isLogin = data?.code === "success";
  const infoUser = data?.infoUser || null;
  const infoCompany = data?.infoCompany || null;

  return {
    isLogin,
    infoUser,
    infoCompany,
    isLoading,
  };
};
