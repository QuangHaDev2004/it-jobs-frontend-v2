import z from "zod";

export const reviewSchema = z.object({
  rating: z.preprocess(
    (val) => (val === null || val === undefined ? 0 : Number(val)),
    z.number().min(1, "Vui lòng đánh giá tổng thể về công ty"),
  ),
  title: z
    .string()
    .min(1, "Thêm nội dung")
    .min(10, "Từ 10 đến 80 ký tự")
    .max(80, "Từ 10 đến 80 ký tự"),
  pros: z
    .string()
    .min(1, "Thêm nội dung")
    .min(50, "Từ 50 đến 10000 ký tự")
    .max(10000, "Từ 50 đến 10000 ký tự"),
  cons: z
    .string()
    .min(1, "Thêm nội dung")
    .min(50, "Từ 50 đến 10000 ký tự")
    .max(10000, "Từ 50 đến 10000 ký tự"),
});

export type ReviewInputs = z.infer<typeof reviewSchema>;
