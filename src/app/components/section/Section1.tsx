"use client";
import Link from "next/link";
import { FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const cities = [
  {
    id: "",
    name: "Tất cả thành phố",
  },
  {
    id: 2,
    name: "Hà Nội",
  },
  {
    id: 3,
    name: "Đà Nẵng",
  },
  {
    id: 4,
    name: "Hồ Chí Minh",
  },
];

export const Section1 = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <>
      <div className="bg-primary py-[60px]">
        <div className="container">
          <h1 className="mb-[30px] text-center text-[28px] font-bold text-white">
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <form
            action=""
            className="mb-[30px] flex flex-wrap gap-x-[15px] gap-y-[12px] md:flex-nowrap"
          >
            <div className="w-full md:w-[240px]">
              <Listbox value={selectedCity} onChange={setSelectedCity}>
                <ListboxButton className="text-secondary relative block h-[56px] w-full rounded-sm bg-white px-4 text-left text-[16px] font-medium focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25">
                  <div className="flex items-center gap-2">
                    <CiLocationOn className="text-xl" />
                    <span>{selectedCity.name}</span>
                  </div>
                  <FaChevronDown
                    className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-sm"
                    aria-hidden="true"
                  />
                </ListboxButton>

                <ListboxOptions
                  anchor="bottom"
                  transition
                  className="w-(--button-width) rounded-sm bg-white p-1 shadow-2xl transition duration-300 ease-in [--anchor-gap:--spacing(1)] focus:outline-none data-leave:data-closed:opacity-0"
                >
                  {cities.map((city) => (
                    <ListboxOption
                      key={city.id}
                      value={city}
                      className="text-secondary data-focus:bg-primary/80 cursor-default rounded-sm px-4 py-2 font-normal capitalize data-focus:text-white"
                    >
                      {city.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
            <input
              type="text"
              className="h-[56px] w-full rounded-sm bg-white px-[20px] text-[16px] font-medium text-[#121212] md:flex-1"
              placeholder="Nhập từ khoá theo kỹ năng, chức vụ, công ty..."
            />
            <button className="bg-blue flex h-[56px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-sm text-[18px] font-medium text-white shadow transition-all duration-300 hover:shadow-md hover:brightness-95 md:w-[240px]">
              <FaMagnifyingGlass className="text-[20px]" />
              Tìm Kiếm
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-[15px]">
            <div className="text-gray text-[16px] font-medium">
              Mọi người đang tìm kiếm:
            </div>
            <div className="inline-flex flex-wrap gap-[10px]">
              <Link
                href="#"
                className="border-gray-3 bg-secondary text-gray hover:bg-gray-3 rounded-[20px] border px-[22px] py-[8px] text-[16px] font-medium hover:text-white"
              >
                ReactJS
              </Link>
              <Link
                href="#"
                className="border-gray-3 bg-secondary text-gray hover:bg-gray-3 rounded-[20px] border px-[22px] py-[8px] text-[16px] font-medium hover:text-white"
              >
                Javascript
              </Link>
              <Link
                href="#"
                className="border-gray-3 bg-secondary text-gray hover:bg-gray-3 rounded-[20px] border px-[22px] py-[8px] text-[16px] font-medium hover:text-white"
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
