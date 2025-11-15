/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto my-[60px] max-w-[1180px] bg-white py-[30px] text-center shadow-2xl">
      <img
        src="/assets/images/not-found.jpg"
        alt="Not Found"
        className="mx-auto block h-40 w-40"
      />
      <h2 className="text-[40px] font-bold text-rose-900">404 Not Found</h2>
      <p className="mt-1.5 mb-[30px] text-rose-900">
        Không tìm thấy tài nguyên mà bạn đang yêu cầu
      </p>
      <Link
        href="/"
        className="inline-flex rounded-[5px] border border-[#ed1b2f] bg-[#ed1b2f] px-10 py-[15px] text-white transition-all duration-300 hover:bg-transparent hover:text-[#ed1b2f]"
      >
        Trở về trang chủ
      </Link>
    </div>
  );
}
