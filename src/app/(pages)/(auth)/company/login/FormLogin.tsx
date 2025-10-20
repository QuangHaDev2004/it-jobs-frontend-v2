"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginCompanyInputs, loginCompanySchema } from "@/validates/auth";
import { InputField } from "@/components/forms/auth/InputField";
import { PasswordField } from "@/components/forms/auth/PasswordField";
import { ButtonSubmit } from "@/components/forms/auth/ButtonSubmit";
import { AuthRedirect } from "@/components/forms/auth/AuthRedirect";
import { useMutation } from "@tanstack/react-query";
import { loginCompany } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const FormLogin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginCompanyInputs>({
    resolver: zodResolver(loginCompanySchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginCompany,
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

  const handleLoginCompany: SubmitHandler<loginCompanyInputs> = (data) => {
    mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLoginCompany)}
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
        href="/company/register"
      />
    </>
  );
};
