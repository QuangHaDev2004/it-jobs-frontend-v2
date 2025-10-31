import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "@/services/auth";
import { QUERY_KEY } from "@/constants/queryKey";

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.CHECK_AUTH,
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
