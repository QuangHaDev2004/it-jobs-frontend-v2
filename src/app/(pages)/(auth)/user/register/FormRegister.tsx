"use client";
import { registerUser } from "@/services/auth";
import { RegisterInputs, registerSchema } from "@/validates/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/forms/auth/InputField";
import { PasswordField } from "@/components/forms/auth/PasswordField";
import { ButtonSubmit } from "@/components/forms/auth/ButtonSubmit";
import { AuthRedirect } from "@/components/forms/auth/AuthRedirect";

export const FormRegister = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      if (data.code === "error") {
        toast.error(data.message);
      }

      if (data.code === "success") {
        reset();
        toast.success(data.message);
        router.push("/user/login");
      }
    },
    onError: (errors) => {
      toast.error(errors.message || "Đăng ký thất bại. Vui lòng thử lại.");
    },
  });

  const handleRegisterForm: SubmitHandler<RegisterInputs> = (data) => {
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
        linkText="Đăng nhập ngay!"
        href="/user/login"
      />
    </>
  );
};
