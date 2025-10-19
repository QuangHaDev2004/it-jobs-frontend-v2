import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { Loading } from "../loading/Loading";
import { api } from "@/libs/axios";
import { useRouter } from "next/navigation";

export const HeaderAccount = () => {
  const { isLogin, infoUser, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return <Loading />;

  const handleLogout = async (url: string) => {
    const res = await api.get("/auth/logout");
    if (res.data.code === "success") {
      localStorage.removeItem("accessToken");
      router.push(url);
    }
  };

  return (
    <>
      <div className="group/sub-1 relative flex items-center gap-x-[5px] text-sm font-semibold text-white sm:text-[16px]">
        {isLogin ? (
          <>
            {/* Đã đăng nhập */}
            <Link href="#">{infoUser?.fullName}</Link>
            <ul className="bg-primary invisible absolute top-full right-0 w-[220px] translate-y-2 rounded-sm opacity-0 shadow-2xl transition-all duration-300 group-hover/sub-1:visible group-hover/sub-1:translate-y-0 group-hover/sub-1:opacity-100">
              <li className="hover:bg-hover flex flex-wrap items-center justify-between rounded-sm px-4 py-[10px] transition-all duration-300">
                <Link
                  href="/company-manage/profile"
                  className="text-sm font-semibold text-white sm:text-[16px]"
                >
                  Thông tin cá nhân
                </Link>
              </li>
              <li className="hover:bg-hover flex flex-wrap items-center justify-between rounded-sm px-4 py-[10px] transition-all duration-300">
                <Link
                  href="/company-manage/cv/list"
                  className="text-sm font-semibold text-white sm:text-[16px]"
                >
                  Quản lý CV đã gửi
                </Link>
              </li>
              <li
                onClick={() => handleLogout("/user/login")}
                className="hover:bg-hover flex cursor-pointer flex-wrap items-center justify-between rounded-sm px-4 py-[10px] transition-all duration-300"
              >
                Đăng xuất
              </li>
            </ul>
          </>
        ) : (
          <>
            {/* Chưa đăng nhập */}
            <Link href="/user/login">Đăng Nhập</Link>
            <div className="hidden lg:block">
              <span className="">/ </span>
              <Link href="/user/register">Đăng Ký</Link>
            </div>
          </>
        )}

        {/* Đã đăng nhập */}
        {/* <Link href="#">
          LG Elect...
        </Link>
        <ul className="bg-[#000065] absolute top-[100%] right-0 w-[220px] rounded-[4px] hidden group-hover/sub-1:block">
          <li className="flex flex-wrap items-center justify-between px-[16px] py-[10px] rounded-[4px] hover:bg-[#000096]">
            <Link href="/company-manage/profile" className="font-[600] text-[16px] text-white">
              Thông tin công ty
            </Link>
          </li>
          <li className="flex flex-wrap items-center justify-between px-[16px] py-[10px] rounded-[4px] hover:bg-[#000096]">
            <Link href="/company-manage/job/list" className="font-[600] text-[16px] text-white">
              Quản lý công việc
            </Link>
          </li>
          <li className="flex flex-wrap items-center justify-between px-[16px] py-[10px] rounded-[4px] hover:bg-[#000096]">
            <Link href="/company-manage/cv/list" className="font-[600] text-[16px] text-white">
              Quản lý CV
            </Link>
          </li>
          <li className="flex flex-wrap items-center justify-between px-[16px] py-[10px] rounded-[4px] hover:bg-[#000096]">
            <Link href="#" className="font-[600] text-[16px] text-white">
              Đăng xuất
            </Link>
          </li>
        </ul> */}
      </div>
    </>
  );
};
