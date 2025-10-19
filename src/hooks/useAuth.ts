import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "@/services/auth";

export const useAuth = () => {
  const pathname = usePathname();

  const { data, isLoading } = useQuery({
    queryKey: ["check-auth", pathname], // chạy lại mỗi khi pathname đổi
    queryFn: checkAuth,
  });

  // console.log(data);

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
