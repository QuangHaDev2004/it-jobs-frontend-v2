import z from "zod";

export const searchSchema = z.object({
  city: z.string().optional(),
  keyword: z.string().optional(),
});

export type SearchInputs = z.infer<typeof searchSchema>;