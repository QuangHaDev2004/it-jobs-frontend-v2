/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { registerUser } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/form/auth/InputField";
import { PasswordField } from "@/components/form/auth/PasswordField";
import { ButtonSubmit } from "@/components/form/auth/ButtonSubmit";
import { AuthRedirect } from "@/components/form/auth/AuthRedirect";
import { RegisterUserInputs, registerUserSchema } from "@/validates/auth";

export const FormRegister = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserInputs>({
    resolver: zodResolver(registerUserSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/user/login");
    },
    onError: (errors: any) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  const handleRegisterForm: SubmitHandler<RegisterUserInputs> = (data) => {
    mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="grid grid-cols-1 gap-[15px]"
      >
        <InputField
          id="fullName"
          label="Họ tên"
          placeholder="Nhập họ và tên"
          register={register("fullName")}
          error={errors.fullName}
        />

        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="Nhập email"
          register={register("email")}
          error={errors.email}
        />

        <PasswordField
          label="Mật khẩu"
          register={register("password")}
          error={errors.password}
        />

        <ButtonSubmit isPending={isPending} text="Đăng ký" />
      </form>
      <AuthRedirect
        message="Bạn đã có tài khoản?"
        linkText="Đăng nhập ngay"
        href="/user/login"
      />
    </>
  );
};
