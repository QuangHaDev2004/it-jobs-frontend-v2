"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { axiosClient } from "@/libs/axiosClient";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  FaArrowRightFromBracket,
  FaBriefcase,
  FaBuildingColumns,
  FaRegCircleUser,
  FaRegFileLines,
} from "react-icons/fa6";
import { useQueryClient } from "@tanstack/react-query";

export const HeaderAccount = () => {
  const { isLogin, infoUser, infoCompany, isLoading } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleLogout = async (url: string) => {
    const res = await axiosClient.get("/auth/logout");
    if (res.data.code === "success") {
      toast.error(res.data.message);
      localStorage.removeItem("accessToken");
      queryClient.setQueryData(["checkAuth"], { code: "error" });
      router.push(url);
    }
  };

  if (isLoading) return null;

  return (
    <>
      <div className="group/sub-1 relative flex items-center gap-x-[5px] text-sm font-semibold text-white sm:text-[16px]">
        {isLogin ? (
          <>
            {/* Đã đăng nhập */}
            {infoUser && (
              <>
                <Link href="/user-manage/profile">{infoUser?.fullName}</Link>
                <ul className="bg-job-primary invisible absolute top-full right-0 w-[220px] translate-y-2 rounded-sm opacity-0 shadow-2xl transition-all duration-300 group-hover/sub-1:visible group-hover/sub-1:translate-y-0 group-hover/sub-1:opacity-100">
                  <li className="hover:bg-job-hover flex flex-wrap items-center justify-between rounded-sm px-4 py-[10px] transition-all duration-300">
                    <Link
                      href="/user-manage/profile"
                      className="flex w-full items-center gap-3 text-sm font-semibold text-white sm:text-[16px]"
                    >
                      <FaRegCircleUser />
                      Thông tin cá nhân
                    </Link>
                  </li>
                  <li className="hover:bg-job-hover flex flex-wrap items-center justify-between rounded-sm px-4 py-[10px] transition-all duration-300">
                    <Link
                      href="/user-manage/cv/list"
                      className="flex w-full items-center gap-3 text-sm font-semibold text-white sm:text-[16px]"
                    >
                      <FaRegFileLines />
                      Quản lý CV đã gửi
                    </Link>
                  </li>
                  <li
                    onClick={() => handleLogout("/user/login")}
                    className="hover:bg-job-hover flex cursor-pointer flex-wrap items-center gap-3 rounded-sm px-4 py-[10px] transition-all duration-300"
                  >
                    <FaArrowRightFromBracket />
                    Đăng xuất
                  </li>
                </ul>
              </>
            )}

            {infoCompany && (
              <>
                <Link href="/company-manage/profile">
                  {infoCompany?.companyName}
                </Link>
                <ul className="bg-job-primary invisible absolute top-full right-0 w-[220px] translate-y-2 rounded-sm opacity-0 shadow-2xl transition-all duration-300 group-hover/sub-1:visible group-hover/sub-1:translate-y-0 group-hover/sub-1:opacity-100">
                  <li className="hover:bg-job-hover flex flex-wrap items-center justify-between rounded-sm px-4 py-[10px] transition-all duration-300">
                    <Link
                      href="/company-manage/profile"
                      className="flex w-full items-center gap-3 text-sm font-semibold text-white sm:text-[16px]"
                    >
                      <FaBuildingColumns />
                      Thông tin công ty
                    </Link>
                  </li>
                  <li className="hover:bg-job-hover flex flex-wrap items-center justify-between rounded-sm px-4 py-[10px] transition-all duration-300">
                    <Link
                      href="/company-manage/job/list"
                      className="flex w-full items-center gap-3 text-sm font-semibold text-white sm:text-[16px]"
                    >
                      <FaBriefcase />
                      Quản lý công việc
                    </Link>
                  </li>
                  <li className="hover:bg-job-hover flex flex-wrap items-center justify-between rounded-sm px-4 py-[10px] transition-all duration-300">
                    <Link
                      href="/company-manage/cv/list"
                      className="flex w-full items-center gap-3 text-sm font-semibold text-white sm:text-[16px]"
                    >
                      <FaRegFileLines />
                      Quản lý CV
                    </Link>
                  </li>
                  <li
                    onClick={() => handleLogout("/company/login")}
                    className="hover:bg-job-hover flex cursor-pointer flex-wrap items-center gap-3 rounded-sm px-4 py-[10px] transition-all duration-300"
                  >
                    <FaArrowRightFromBracket />
                    Đăng xuất
                  </li>
                </ul>
              </>
            )}
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
      </div>
    </>
  );
};
