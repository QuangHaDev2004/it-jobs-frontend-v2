"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginCompanyInputs, loginCompanySchema } from "@/validates/auth";
import { InputField } from "@/components/form/auth/InputField";
import { PasswordField } from "@/components/form/auth/PasswordField";
import { ButtonSubmit } from "@/components/form/auth/ButtonSubmit";
import { AuthRedirect } from "@/components/form/auth/AuthRedirect";
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
  } = useForm<LoginCompanyInputs>({
    resolver: zodResolver(loginCompanySchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginCompany,
    onSuccess: async (data) => {
      if (data.code === "error") toast.error(data.message);
      if (data.code === "success") {
        toast.success(data.message);
        router.push("/");
      }
    },
    onError: (errors) => {
      console.log(errors.message);
    },
  });

  const handleLoginCompany: SubmitHandler<LoginCompanyInputs> = (data) => {
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
