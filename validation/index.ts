import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(50, { message: "Title must be less than 50 characters" }),
  body: z
    .string()
    .max(150, { message: "Title must be less than 50 characters" })
    .optional(),
  completed: z.boolean(),
});
export type TodoFormValues = z.infer<typeof todoFormSchema>;
