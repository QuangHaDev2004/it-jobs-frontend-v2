import Link from "next/link"

export const HeaderAccount = () => {
  return (
    <>
      <div className="flex items-center gap-x-[5px] font-[600] sm:text-[16px] text-[12px] text-white relative group/sub-1">
        {/* Chưa đăng nhập */}
        {/* <Link href="#">
          Đăng Nhập
        </Link>
        <span className="">/</span>
        <Link href="#">
          Đăng Ký
        </Link> */}

        {/* Đã đăng nhập */}
        <Link href="#">
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
        </ul>
      </div>
    </>
  )
}