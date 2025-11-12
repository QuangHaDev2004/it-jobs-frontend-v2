"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  FaArrowRightFromBracket,
  FaBriefcase,
  FaBuildingColumns,
  FaRegCircleUser,
  FaRegFileLines,
} from "react-icons/fa6";
import { logout } from "@/services/auth";

export const HeaderAccount = () => {
  const { isLogin, infoUser, infoCompany, isLoading } = useAuth();
  const router = useRouter();

  const handleLogout = async (url: string) => {
    const data = await logout();
    if (data.code === "success") {
      toast.error(data.message);
      router.push(url);
    }
  };

  if (isLoading)
    return (
      <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
    );

  return (
    <>
      <div className="group/sub-1 relative flex items-center gap-x-[5px] text-sm font-semibold text-white sm:text-[16px]">
        {isLogin ? (
          <>
            {/* Đã đăng nhập */}
            {infoUser && (
              <>
                <div className="border-job-gray relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-amber-700">
                  {infoUser?.fullName?.[0]}
                  <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400"></div>
                </div>
                <ul className="bg-job-primary invisible absolute top-full right-0 w-[220px] translate-y-2 rounded-sm opacity-0 shadow-2xl transition-all duration-150 group-hover/sub-1:visible group-hover/sub-1:translate-y-0 group-hover/sub-1:opacity-100">
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
                <div className="border-job-gray relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-amber-700">
                  {infoCompany?.companyName?.[0]}
                  <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400"></div>
                </div>
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
          <div className="flex items-center gap-6">
            {/* Chưa đăng nhập */}
            <Link
              href="/company/login"
              className="transition-all duration-200 hover:underline"
            >
              Nhà Tuyển Dụng
            </Link>

            <div className="flex items-center transition-all duration-200 hover:underline">
              <Link href="/user/login">Đăng Nhập</Link>
              <div className="hidden lg:block">
                <span className="">/</span>
                <Link href="/user/register">Đăng Ký</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
