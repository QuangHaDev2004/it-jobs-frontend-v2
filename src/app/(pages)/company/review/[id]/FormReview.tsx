/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createReview } from "@/services/review";
import { ReviewInputs, reviewSchema } from "@/validates/review";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export const FormReview = ({ id }: { id: string }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewInputs>({
    resolver: zodResolver(reviewSchema) as any,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ReviewInputs) => createReview(id, data),
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
    },
    onError: (errors: any) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  const handleReviewForm: SubmitHandler<ReviewInputs> = (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(handleReviewForm)}>
      <div className="flex gap-14">
        <label
          htmlFor="totalRating"
          className="text-job-secondary inline-block text-lg font-bold"
        >
          Đánh giá chung <span className="text-job-red-500">*</span>
        </label>
        <div className="rating">
          <input
            {...register("rating")}
            type="radio"
            value="1"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            {...register("rating")}
            type="radio"
            value="2"
            className="mask mask-star-2 bg-orange-400"
            // defaultChecked
          />
          <input
            {...register("rating")}
            type="radio"
            value="3"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            {...register("rating")}
            type="radio"
            value="4"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            {...register("rating")}
            type="radio"
            value="5"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      {errors.rating && (
        <p className="text-job-red-500 mt-1 text-sm font-medium">
          {errors.rating.message}
        </p>
      )}

      <div className="mt-8 mb-4 flex flex-col">
        <label
          htmlFor="title"
          className="text-job-secondary mb-4 inline-block text-lg font-bold"
        >
          Tiêu đề <span className="text-job-red-500">*</span>
        </label>
        <input
          {...register("title")}
          type="text"
          id="title"
          placeholder="Nhập tiêu đề"
          className={`h-14 rounded-sm border px-4 ${errors.title ? "border-job-red-500" : "border-job-gray-100"}`}
        />
        {errors.title && (
          <p className="text-job-red-500 mt-1 text-sm font-medium">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="mb-4 flex flex-col">
        <label
          htmlFor="pros"
          className="text-job-secondary mb-4 inline-block text-lg font-bold"
        >
          Điều làm bạn thích làm việc tại đây{" "}
          <span className="text-job-red-500">*</span>
        </label>
        <textarea
          {...register("pros")}
          id="pros"
          placeholder="Nhập nội dung"
          className={`min-h-[180px] resize-none rounded-sm border p-4 ${errors.pros ? "border-job-red-500" : "border-job-gray-100"}`}
        ></textarea>
        {errors.pros && (
          <p className="text-job-red-500 mt-1 text-sm font-medium">
            {errors.pros.message}
          </p>
        )}
      </div>

      <div className="mb-4 flex flex-col">
        <label
          htmlFor="cons"
          className="text-job-secondary mb-4 inline-block text-lg font-bold"
        >
          Đề nghị cải thiện <span className="text-job-red-500">*</span>
        </label>
        <textarea
          {...register("cons")}
          id="cons"
          placeholder="Nhập nội dung"
          className={`min-h-[180px] resize-none rounded-sm border p-4 ${errors.cons ? "border-job-red-500" : "border-job-gray-100"}`}
        ></textarea>
        {errors.cons && (
          <p className="text-job-red-500 mt-1 text-sm font-medium">
            {errors.cons.message}
          </p>
        )}
      </div>

      <button
        disabled={isPending}
        type="submit"
        className={`h-[56px] w-full rounded-sm text-[16px] font-bold text-white transition-all duration-300 ${isPending ? "cursor-not-allowed bg-gray-400" : "bg-job-red-500 cursor-pointer hover:brightness-90"}`}
      >
        Gửi đánh giá
      </button>
    </form>
  );
};
