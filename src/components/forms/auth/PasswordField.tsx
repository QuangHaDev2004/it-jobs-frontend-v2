import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type PasswordFieldProps = {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export const PasswordField = ({
  label,
  register,
  error,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor="password" className="mb-[5px] block text-sm font-medium">
        <span>{label}</span>
        <span className="text-red ml-1 inline-block">*</span>
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          {...register}
          placeholder="Nhập mật khẩu"
          className={`h-[46px] w-full rounded-sm border px-5 text-sm font-medium ${error ? "border-red" : "border-gray"}`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-black/60"
        >
          {showPassword ? (
            <FaRegEyeSlash className="text-lg" />
          ) : (
            <FaRegEye className="text-lg" />
          )}
        </button>
      </div>
      {error && (
        <p className="text-red mt-1 text-sm font-medium">{error.message}</p>
      )}
    </div>
  );
};
