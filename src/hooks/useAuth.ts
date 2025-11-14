import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "@/services/auth";
import { usePathname } from "next/navigation";

export const useAuth = () => {
  const pathname = usePathname();
  const { data, isPending } = useQuery({
    queryKey: ["checkAuth", pathname],
    queryFn: checkAuth,
  });

  const infoUser = data?.infoUser || null;
  const infoCompany = data?.infoCompany || null;
  const isLogin = !!infoUser || !!infoCompany;

  return {
    isLogin,
    infoUser,
    infoCompany,
    isPending,
  };
};
