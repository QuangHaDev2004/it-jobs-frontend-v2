import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  type?: string;
  defaultValue?: string;
  error?: FieldError;
  className?: string;
};

export const InputField = ({
  id,
  label,
  required = false,
  register,
  type = "text",
  defaultValue,
  error,
  className,
}: InputFieldProps) => {
  return (
    <>
      <div className={className}>
        <label
          htmlFor={id}
          className="mb-[5px] block text-sm font-medium text-black"
        >
          <span>{label}</span>
          {required && <span className="text-job-red ml-1 inline-block">*</span>}
        </label>
        <input
          {...register}
          id={id}
          type={type}
          className="border-job-gray h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black"
          defaultValue={defaultValue}
        />
        {error && (
          <p className="text-job-red mt-1 text-sm font-medium">{error.message}</p>
        )}
      </div>
    </>
  );
};
