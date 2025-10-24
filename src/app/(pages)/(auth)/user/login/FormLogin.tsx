"use client";
import { AuthRedirect } from "@/components/form/auth/AuthRedirect";
import { ButtonSubmit } from "@/components/form/auth/ButtonSubmit";
import { InputField } from "@/components/form/auth/InputField";
import { PasswordField } from "@/components/form/auth/PasswordField";
import { loginUser } from "@/services/auth";
import { LoginUserInputs, loginUserSchema } from "@/validates/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export const FormLogin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInputs>({
    resolver: zodResolver(loginUserSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.code === "error") toast.error(data.message);
      if (data.code === "success") {
        localStorage.setItem("accessToken", data.accessToken);
        toast.success(data.message);
        router.push("/");
      }
    },
    onError: (errors) => {
      console.log(errors.message);
    },
  });

  const handleLoginForm: SubmitHandler<LoginUserInputs> = (data) => {
    mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLoginForm)}
        className="grid grid-cols-1 gap-[15px]"
      >
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

        <ButtonSubmit isPending={isPending} text="Đăng nhập" />
      </form>
      <AuthRedirect
        message="Bạn chưa có tài khoản?"
        linkText="Đăng ký ngay"
        href="/user/register"
      />
    </>
  );
};
