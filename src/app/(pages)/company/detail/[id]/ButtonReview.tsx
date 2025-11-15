"use client"
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";

export const ButtonReview = ({ id }: { id: string | undefined }) => {
  const { infoUser } = useAuthStore();
  if (!infoUser) return null;

  return (
    <Link
      href={`/company/review/${id}`}
      target="_blank"
      className="bg-job-red-500 inline-flex h-12 w-44 items-center justify-center rounded-md text-[16px] font-semibold text-white transition-all duration-300 hover:brightness-90"
    >
      Viết đánh giá
    </Link>
  );
};
