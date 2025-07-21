import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password minimal 6 karakter" }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Password tidak cocok",
      });
    }
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export type RegisterFieldErrors = z.inferFlattenedErrors<
  typeof RegisterSchema
>["fieldErrors"];
