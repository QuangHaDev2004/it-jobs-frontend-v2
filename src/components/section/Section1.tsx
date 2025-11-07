"use client";
import { useCityList } from "@/hooks/useCityList";
import { SearchInputs, searchSchema } from "@/validates/search";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ImSpinner3 } from "react-icons/im";

export const Section1 = () => {
  const { cityList } = useCityList();
  const router = useRouter();
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";
  const keyword = searchParams.get("keyword") || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchInputs>({
    resolver: zodResolver(searchSchema),
  });

  const handleSearchForm: SubmitHandler<SearchInputs> = (data) => {
    const city = data.city ?? "";
    const keyword = data.keyword ?? "";
    const query = `?city=${encodeURIComponent(city)}&keyword=${encodeURIComponent(keyword)}`;

    router.push(`/search${query}`);
  };

  useEffect(() => {
    if (cityList.length > 0) {
      reset({ city, keyword });
    }
  }, [city, cityList, keyword, reset]);

  return (
    <>
      <div className="bg-job-primary py-[60px]">
        <div className="container">
          <h1 className="mb-[30px] text-center text-[28px] font-bold text-white">
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <form
            onSubmit={handleSubmit(handleSearchForm)}
            className="mb-[30px] flex flex-wrap gap-x-[15px] gap-y-3 md:flex-nowrap"
          >
            <select
              {...register("city")}
              className="select text-job-secondary h-[56px] w-full rounded-sm bg-white px-5 text-[16px] font-medium md:w-[240px]"
            >
              <option
                value=""
                className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
              >
                Tất cả thành phố
              </option>
              {cityList.map((city: { _id: string; name: string }) => (
                <option
                  key={city._id}
                  value={city.name}
                  className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
                >
                  {city.name}
                </option>
              ))}
            </select>
            <input
              {...register("keyword")}
              type="text"
              className="text-job-secondary h-[56px] w-full rounded-sm bg-white px-5 text-[16px] font-medium md:flex-1"
              placeholder="Nhập từ khoá theo kỹ năng, chức vụ, công ty..."
            />
            <button
              disabled={isSubmitting}
              className={`bg-job-blue flex h-[56px] w-full items-center justify-center gap-2.5 rounded-sm text-[18px] font-medium text-white shadow transition-all duration-300 md:w-[240px] ${isSubmitting ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:shadow-md hover:brightness-95"}`}
            >
              {isSubmitting ? (
                <>
                  <ImSpinner3 className="animate-spin text-[20px]" />
                  Đang tìm kiếm
                </>
              ) : (
                <>
                  <FaMagnifyingGlass className="text-[20px]" />
                  Tìm Kiếm
                </>
              )}
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-[15px]">
            <div className="text-job-gray text-[16px] font-medium">
              Mọi người đang tìm kiếm:
            </div>
            <div className="inline-flex flex-wrap gap-2.5">
              <Link
                href="/search?language=ReactJS"
                className="border-job-gray-3 bg-job-secondary text-job-gray hover:bg-job-gray-3 rounded-[20px] border px-[22px] py-2 text-[16px] font-medium hover:text-white"
              >
                ReactJS
              </Link>
              <Link
                href="/search?language=Javascript"
                className="border-job-gray-3 bg-job-secondary text-job-gray hover:bg-job-gray-3 rounded-[20px] border px-[22px] py-2 text-[16px] font-medium hover:text-white"
              >
                Javascript
              </Link>
              <Link
                href="/search?language=NodeJS"
                className="border-job-gray-3 bg-job-secondary text-job-gray hover:bg-job-gray-3 rounded-[20px] border px-[22px] py-2 text-[16px] font-medium hover:text-white"
              >
                NodeJS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
