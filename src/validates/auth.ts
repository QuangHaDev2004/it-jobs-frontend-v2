import * as z from "zod";

export const registerSchema = z.object({
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

export type RegisterInputs = z.infer<typeof registerSchema>;
