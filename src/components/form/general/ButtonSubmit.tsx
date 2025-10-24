export const ButtonSubmit = ({
  isPending,
  text,
}: {
  isPending: boolean;
  text: string;
}) => {
  return (
    <>
      <div className="sm:col-span-2">
        <button
          disabled={isPending}
          className="bg-blue h-12 cursor-pointer rounded-sm px-5 text-[16px] font-bold text-white transition-all duration-300 hover:brightness-95 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {isPending ? "Đang xử lý..." : text}
        </button>
      </div>
    </>
  );
};
