export const Pagination = () => {
  return (
    <>
      <div className="mt-[30px]">
        <select
          id=""
          className="select border-job-gray text-job-gray-3 w-32 rounded-lg border px-5 text-sm font-medium"
        >
          <option
            value=""
            className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
          >
            Trang 1
          </option>
          <option
            value=""
            className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
          >
            Trang 2
          </option>
          <option
            value=""
            className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
          >
            Trang 3
          </option>
        </select>
      </div>
    </>
  );
};
