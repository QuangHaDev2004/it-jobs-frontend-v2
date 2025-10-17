import Link from "next/link";

export const HeaderAccount = () => {
  return (
    <>
      <div className="group/sub-1 relative flex items-center gap-x-[5px] text-xs font-semibold text-white sm:text-[16px]">
        {/* Chưa đăng nhập */}
        <Link href="/user/login">Đăng Nhập</Link>
        <div className="hidden lg:block">
          <span className="">/ </span>
          <Link href="/user/register">Đăng Ký</Link>
        </div>

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
