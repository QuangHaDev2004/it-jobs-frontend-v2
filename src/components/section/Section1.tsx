"use client";
import { useCityList } from "@/hooks/useCityList";
import { SearchInputs, searchSchema } from "@/validates/search";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Section1 = () => {
  const { cityList } = useCityList();
  const router = useRouter();

  const { register, handleSubmit } = useForm<SearchInputs>({
    resolver: zodResolver(searchSchema),
  });

  const handleSearchForm: SubmitHandler<SearchInputs> = (data) => {
    const city = data.city ?? "";
    const keyword = data.keyword ?? "";
    const query = `?city=${encodeURIComponent(city)}&keyword=${encodeURIComponent(keyword)}`;

    router.push(`/search${query}`);
  };

  return (
    <>
      <div className="bg-job-primary py-[60px]">
        <div className="container">
          <h1 className="mb-[30px] text-center text-[28px] font-bold text-white">
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <form
            onSubmit={handleSubmit(handleSearchForm)}
            className="mb-[30px] flex flex-wrap gap-x-[15px] gap-y-[12px] md:flex-nowrap"
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
                  value={city._id}
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
            <button className="bg-job-blue flex h-[56px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-sm text-[18px] font-medium text-white shadow transition-all duration-300 hover:shadow-md hover:brightness-95 md:w-[240px]">
              <FaMagnifyingGlass className="text-[20px]" />
              Tìm Kiếm
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-[15px]">
            <div className="text-job-gray text-[16px] font-medium">
              Mọi người đang tìm kiếm:
            </div>
            <div className="inline-flex flex-wrap gap-[10px]">
              <Link
                href="/search?language=ReactJS"
                className="border-job-gray-3 bg-job-secondary text-job-gray hover:bg-job-gray-3 rounded-[20px] border px-[22px] py-[8px] text-[16px] font-medium hover:text-white"
              >
                ReactJS
              </Link>
              <Link
                href="/search?language=Javascript"
                className="border-job-gray-3 bg-job-secondary text-job-gray hover:bg-job-gray-3 rounded-[20px] border px-[22px] py-[8px] text-[16px] font-medium hover:text-white"
              >
                Javascript
              </Link>
              <Link
                href="/search?language=NodeJS"
                className="border-job-gray-3 bg-job-secondary text-job-gray hover:bg-job-gray-3 rounded-[20px] border px-[22px] py-[8px] text-[16px] font-medium hover:text-white"
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
