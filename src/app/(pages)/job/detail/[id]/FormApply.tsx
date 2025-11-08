/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { applyJob } from "@/services/job";
import { FormApplyInputs, formApplySchema } from "@/validates/job";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export const FormApply = ({ jobId }: { jobId: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormApplyInputs>({
    resolver: zodResolver(formApplySchema) as any,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: applyJob,
    onSuccess: (data) => {
      if (data.code === "error") toast.error(data.message);
      if (data.code === "success") toast.success(data.message);
      reset();
    },
    onError: (errors) => {
      console.log(errors.message);
    },
  });

  const handleFormApply: SubmitHandler<FormApplyInputs> = (data) => {
    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("fileCV", data.fileCV);

    mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormApply)}
      className="flex flex-col gap-[15px]"
    >
      <div>
        <label
          htmlFor="fullName"
          className="mb-[5px] text-sm font-medium text-black"
        >
          Họ tên <span className="text-job-red">*</span>
        </label>
        <input
          {...register("fullName")}
          id="fullName"
          type="text"
          className={`h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black ${errors.fullName?.message ? "border-job-red" : "border-job-gray"}`}
        />
        {errors.fullName && (
          <p className="text-job-red mt-1 text-sm font-medium">
            {errors.fullName.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-[5px] text-sm font-medium text-black"
        >
          Email <span className="text-job-red">*</span>
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          className={`h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black ${errors.email?.message ? "border-job-red" : "border-job-gray"}`}
        />
        {errors.email && (
          <p className="text-job-red mt-1 text-sm font-medium">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-[5px] text-sm font-medium text-black"
        >
          Số điện thoại <span className="text-job-red">*</span>
        </label>
        <input
          {...register("phone")}
          id="phone"
          type="text"
          className={`h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black ${errors.phone?.message ? "border-job-red" : "border-job-gray"}`}
        />
        {errors.phone && (
          <p className="text-job-red mt-1 text-sm font-medium">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="fileCV"
          className="mb-[5px] text-sm font-medium text-black"
        >
          File CV dạng PDF <span className="text-job-red">*</span>
        </label>
        <input
          {...register("fileCV")}
          id="fileCV"
          type="file"
          className={`file-input h-[46px] w-full rounded-sm border text-sm font-medium text-black file:py-3 ${errors.fileCV?.message ? "border-job-red" : "border-job-gray"}`}
        />
        {errors.fileCV && (
          <p className="text-job-red mt-1 text-sm font-medium">
            {errors.fileCV.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className={`h-12 w-full rounded-sm text-[16px] font-bold text-white transition-all duration-300 hover:brightness-90 ${isPending ? "bg-job-gray cursor-not-allowed" : "bg-job-blue cursor-pointer"}`}
      >
        {isPending ? "Đang ứng tuyển..." : "Gửi CV ứng tuyển"}
      </button>
    </form>
  );
};
