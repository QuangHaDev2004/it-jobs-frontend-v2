type ButtonSubmitProps = {
  isPending: boolean;
  text: string;
};

export const ButtonSubmit = ({
  isPending = false,
  text,
}: ButtonSubmitProps) => {
  return (
    <button
      disabled={isPending}
      type="submit"
      className="bg-blue h-[46px] cursor-pointer rounded-sm text-[16px] font-bold text-white shadow transition-all duration-300 hover:shadow-md hover:brightness-95 disabled:cursor-not-allowed"
    >
      {isPending ? "Đang xử lý..." : text}
    </button>
  );
};
