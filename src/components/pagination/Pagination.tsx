/* eslint-disable @typescript-eslint/no-explicit-any */
export const Pagination = ({
  page,
  handlePagination,
  totalPage,
}: {
  page: number;
  handlePagination: (event: any) => void;
  totalPage: number;
}) => {
  return (
    <>
      <div className="mt-[30px]">
        <select
          value={page}
          onChange={handlePagination}
          id="pagination"
          className="select border-job-gray-100 text-job-gray-3 w-32 rounded-lg border px-5 text-sm font-medium"
        >
          {Array(totalPage)
            .fill("")
            .map((_, index) => (
              <option key={index} value={index + 1} className="rounded-sm py-2">
                Trang {index + 1}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};
