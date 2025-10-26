import { UseFormRegisterReturn } from "react-hook-form";

type City = {
  _id: string;
  name: string;
};

export const CitySelect = ({
  register,
  defaultValue,
  cityList,
}: {
  register: UseFormRegisterReturn;
  defaultValue: string;
  cityList: City[];
}) => {
  return (
    <>
      <div className="">
        <label
          htmlFor="city"
          className="mb-[5px] block text-sm font-medium text-black"
        >
          Thành phố
        </label>
        <select
          {...register}
          defaultValue={defaultValue}
          id="city"
          className="select border-job-gray h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black"
        >
          {cityList.map((item) => (
            <option
              key={item._id}
              value={item._id}
              className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
