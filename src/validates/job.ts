import z from "zod";

// Form Apply
export const formApplySchema = z.object({
  fullName: z
    .string()
    .min(1, "Vui lòng nhập họ tên!")
    .min(5, "Họ tên phải có ít nhất 5 ký tự!")
    .max(50, "Họ tên không được vượt quá 50 ký tự!"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không đúng định dạng!"),
  phone: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại!")
    .regex(
      /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
      "Số điện thoại không đúng định dạng!",
    ),
  fileCV: z.preprocess(
    (val) => (val instanceof FileList ? val[0] : val),
    z
      .custom<File>((file) => file instanceof File, "Vui lòng chọn file CV!")
      .refine(
        (file) => file.type === "application/pdf",
        "File phải là định dạng PDF!",
      )
      .refine(
        (file) => file.size <= 5 * 1024 * 1024,
        "Dung lượng file không được vượt quá 5MB!",
      ),
  ),
});

export type FormApplyInputs = z.infer<typeof formApplySchema>;
