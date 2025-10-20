"use client";
import { AuthRedirect } from "@/components/forms/auth/AuthRedirect";
import { ButtonSubmit } from "@/components/forms/auth/ButtonSubmit";
import { InputField } from "@/components/forms/auth/InputField";
import { PasswordField } from "@/components/forms/auth/PasswordField";
import { registerCompany } from "@/services/auth";
import { RegisterCompanyInputs, registerCompanySchema } from "@/validates/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export const FormRegister = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCompanyInputs>({
    resolver: zodResolver(registerCompanySchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: registerCompany,
    onSuccess: (data) => {
      if (data.code === "error") toast.error(data.message);
      if (data.code === "success") {
        toast.success(data.message);
        router.push("/company/login");
      }
    },
    onError: (errors) => {
      console.log(errors.message);
    },
  });

  const handleRegisterCompany: SubmitHandler<RegisterCompanyInputs> = (
    data,
  ) => {
    mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegisterCompany)}
        className="grid grid-cols-1 gap-[15px]"
      >
        <InputField
          id="companyName"
          label="Tên công ty"
          placeholder="Nhập tên công ty"
          register={register("companyName")}
          error={errors.companyName}
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
        href="/company/login"
      />
    </>
  );
};
