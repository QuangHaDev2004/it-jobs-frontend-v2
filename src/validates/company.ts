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
