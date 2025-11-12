/* eslint-disable @next/next/no-img-element */
export const CardJobSkeleton = () => {
  return (
    <div
      className="border-job-gray relative flex animate-pulse flex-col justify-between overflow-hidden rounded-lg border"
      style={{
        background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)",
      }}
    >
      <img
        src="/assets/images/cart-bg.svg"
        alt="Background"
        className="absolute top-0 left-0 h-auto w-full"
      />

      <div className="relative text-center">
        <div
          className="mx-auto mt-5 mb-4 aspect-square w-[125px] overflow-hidden rounded-lg bg-gray-200 sm:mt-8 sm:mb-6 sm:w-40"
          style={{
            boxShadow: "0px 4px 24px 0px #0000001F",
          }}
        />

        <div className="mx-4 mt-5 mb-2 h-5 rounded bg-gray-200" />
        <div className="mx-auto mt-1 mb-3 h-5 w-2/3 rounded bg-gray-200" />

        <div className="mx-auto mb-2 h-4 w-1/2 rounded bg-gray-200" />
        <div className="mx-auto mb-2 h-4 w-1/4 rounded bg-gray-200" />
        <div className="mx-auto mb-2 h-4 w-1/3 rounded bg-gray-200" />
        <div className="mx-auto mb-3 h-4 w-1/4 rounded bg-gray-200" />

        <div className="mt-3 mb-5 flex flex-wrap items-center justify-center gap-2">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <div key={i} className="h-6 w-16 rounded-[20px] bg-gray-200" />
            ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
        <div className="h-8 w-16 rounded-sm bg-gray-200" />
        <div className="h-8 w-16 rounded-sm bg-gray-200" />
      </div>
    </div>
  );
};
