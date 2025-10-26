import { UseFormRegisterReturn } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

export const SelectField = ({
  id,
  label,
  register,
  defaultValue,
  options,
}: {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  defaultValue?: string;
  options: Option[];
}) => {
  return (
    <>
      <div className="">
        <label
          htmlFor={id}
          className="mb-[5px] block text-sm font-medium text-black"
        >
          {label}
        </label>
        <select
          {...register}
          defaultValue={defaultValue}
          id={id}
          className="select border-job-gray h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black"
        >
          {options.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className="hover:bg-job-primary/80 rounded-sm py-2 hover:text-white"
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
