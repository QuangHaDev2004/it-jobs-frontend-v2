import { z } from "zod";

// Company Profile
export const companyProfileSchema = z.object({
  companyName: z
    .string()
    .min(1, "Vui lòng nhập tên công ty!")
    .max(200, "Tên công ty không được vượt quá 200 ký tự!"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không đúng định dạng!"),
  phone: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  companyModel: z.string().optional(),
  companyEmployees: z.string().optional(),
  workingTime: z.string().optional(),
  workOverTime: z.string().optional(),
  description: z.string().optional(),
  logo: z.any(),
});

export type CompanyProfileInputs = z.infer<typeof companyProfileSchema>;

// Create Job
export const createJobSchema = z
  .object({
    title: z.string().min(1, "Vui lòng nhập tên công việc!"),
    salaryMin: z.coerce
      .number()
      .min(0, "Vui lòng nhập mức lương >= 0!")
      .optional(),
    salaryMax: z.coerce
      .number()
      .min(0, "Vui lòng nhập mức lương >= 0!")
      .optional(),
    position: z.string().optional(),
    workingForm: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    images: z.any(),
    description: z.string().optional(),
  })
  .refine(
    (data) =>
      // điều kiện kiểm tra
      data.salaryMin === undefined ||
      data.salaryMax === undefined ||
      data.salaryMax >= data.salaryMin,
    {
      message: "Lương tối đa phải >= lương tối thiểu!",
      path: ["salaryMax"],
    },
  );

export type CreateJobInputs = z.infer<typeof createJobSchema>;
