export const UserProfileSkeleton = () => {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-x-5 gap-y-[15px] sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <div className="h-4 w-24 rounded-sm bg-gray-200" />
        <div className="h-[46px] rounded-sm bg-gray-200" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-4 w-20 rounded-sm bg-gray-200" />
        <div className="h-[46px] rounded-sm bg-gray-200" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-4 w-28 rounded-sm bg-gray-200" />
        <div className="h-[46px] rounded-sm bg-gray-200" />
      </div>

      <div className="col-span-1 flex flex-col gap-2 sm:col-span-2">
        <div className="h-4 w-16 rounded-sm bg-gray-200" />
        <div className="h-[150px] w-[150px] rounded-sm bg-gray-200" />
      </div>

      <div className="col-span-2">
        <div className="h-12 w-[120px] rounded-sm bg-gray-200" />
      </div>
    </div>
  );
};
