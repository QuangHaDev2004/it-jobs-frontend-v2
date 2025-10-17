import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  register,
  error,
}: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="mb-[5px] block text-sm font-medium">
        <span>{label}</span>
        <span className="text-red ml-1 inline-block">*</span>
      </label>
      <input
        type={type}
        id={id}
        {...register}
        placeholder={placeholder}
        className={`h-[46px] w-full rounded-sm border px-5 text-sm font-medium ${error ? "border-red" : "border-gray"}`}
      />
      {error && (
        <p className="text-red mt-1 text-sm font-medium">{error.message}</p>
      )}
    </div>
  );
};
