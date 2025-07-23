import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export type LoginFieldErrors = z.inferFlattenedErrors<
  typeof LoginSchema
>["fieldErrors"];
