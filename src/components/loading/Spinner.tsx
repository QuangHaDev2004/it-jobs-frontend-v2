export const Spinner = ({ height }: { height?: string }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: height }}
    >
      <div className="border-job-primary border-t-job-gray h-10 w-10 animate-spin rounded-full border-4"></div>
    </div>
  );
};
