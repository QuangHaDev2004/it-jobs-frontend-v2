export const Title = ({ text }: { text: string }) => {
  return (
    <>
      <h2 className="text-secondary mb-[30px] text-center text-2xl font-bold sm:text-[28px]">
        {text}
      </h2>
    </>
  );
};
