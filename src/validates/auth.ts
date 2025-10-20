import * as z from "zod";

// User
export const registerUserSchema = z.object({
  fullName: z
    .string()
    .min(1, "Vui lòng nhập họ tên!")
    .min(5, "Họ tên phải có ít nhất 5 ký tự!")
    .max(50, "Họ tên không được vượt quá 50 ký tự!"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không đúng định dạng!"),
  password: z
    .string()
    .min(1, "Vui lòng nhập mật khẩu!")
    .min(8, "Mật khẩu phải chứa ít nhất 8 ký tự!")
    .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái in hoa!")
    .regex(/[a-z]/, "Mật khẩu phải chứa ít nhất một chữ cái in thường!")
    .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một chữ số!")
    .regex(/[@$!%*?&]/, "Mật khẩu phải chứa ít nhất một ký tự đặc biệt!"),
});

export type RegisterUserInputs = z.infer<typeof registerUserSchema>;

export const loginUserSchema = z.object({
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không đúng định dạng!"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu!"),
});

export type LoginUserInputs = z.infer<typeof loginUserSchema>;

// Company
export const registerCompanySchema = z.object({
  companyName: z
    .string()
    .min(1, "Vui lòng nhập tên công ty!")
    .max(200, "Tên công ty không được vượt quá 200 ký tự!"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không đúng định dạng!"),
  password: z
    .string()
    .min(1, "Vui lòng nhập mật khẩu!")
    .min(8, "Mật khẩu phải chứa ít nhất 8 ký tự!")
    .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái in hoa!")
    .regex(/[a-z]/, "Mật khẩu phải chứa ít nhất một chữ cái in thường!")
    .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một chữ số!")
    .regex(/[@$!%*?&]/, "Mật khẩu phải chứa ít nhất một ký tự đặc biệt!"),
});

export type RegisterCompanyInputs = z.infer<typeof registerCompanySchema>;

export const loginCompanySchema = z.object({
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không đúng định dạng!"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu!"),
});

export type loginCompanyInputs = z.infer<typeof loginCompanySchema>;
