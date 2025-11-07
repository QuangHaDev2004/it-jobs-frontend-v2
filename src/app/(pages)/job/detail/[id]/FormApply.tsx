export const FormApply = () => {
  return (
    <form action="" className="flex flex-col gap-[15px]">
      <div className="">
        <label
          htmlFor="fullName"
          className="mb-[5px] text-sm font-medium text-black"
        >
          Họ tên <span className="text-job-red">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          className="border-job-gray h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black"
        />
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="mb-[5px] text-sm font-medium text-black"
        >
          Email <span className="text-job-red">*</span>
        </label>
        <input
          id="email"
          type="email"
          className="border-job-gray h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black"
        />
      </div>
      <div className="">
        <label
          htmlFor="phone"
          className="mb-[5px] text-sm font-medium text-black"
        >
          Số điện thoại <span className="text-job-red">*</span>
        </label>
        <input
          id="phone"
          type="text"
          className="border-job-gray h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black"
        />
      </div>
      <div className="">
        <label
          htmlFor="fileCV"
          className="mb-[5px] text-sm font-medium text-black"
        >
          File CV dạng PDF <span className="text-job-red">*</span>
        </label>
        <input
          id="fileCV"
          type="file"
          className="border-job-gray h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black file:py-3"
        />
      </div>
      <button className="bg-job-blue h-12 w-full cursor-pointer rounded-sm text-[16px] font-bold text-white transition-all duration-300 hover:brightness-90">
        Gửi CV ứng tuyển
      </button>
    </form>
  );
};
