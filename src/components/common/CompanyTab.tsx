"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CompanyTab = ({ id }: { id: string | undefined }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="mb-5 rounded-lg bg-white p-5 shadow-md">
      <ul className="text-job-secondary flex items-center gap-12 text-[16px] font-bold">
        <li>
          <Link
            href={`/company/detail/${id}`}
            className={`pb-5 ${isActive(`/company/detail/${id}`) && "text-job-red-500 border-b-2"}`}
          >
            Giới thiệu
          </Link>
        </li>
        <li>
          <Link
            href={`/company/detail/${id}/review`}
            className={`pb-5 ${isActive(`/company/detail/${id}/review`) && "text-job-red-500 border-b-2"}`}
          >
            Đánh giá
          </Link>
        </li>
      </ul>
    </nav>
  );
};
