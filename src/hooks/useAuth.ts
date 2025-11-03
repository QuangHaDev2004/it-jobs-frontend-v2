import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "@/services/auth";

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["checkAuth"],
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
