import { z } from "zod";

export const ResetPasswordSchema = z
  .object({
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

export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;

export type ResetPasswordFieldErrors = z.inferFlattenedErrors<
  typeof ResetPasswordSchema
>["fieldErrors"];
