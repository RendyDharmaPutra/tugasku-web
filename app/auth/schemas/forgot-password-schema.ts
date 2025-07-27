import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export type ForgotPasswordFieldErrors = z.inferFlattenedErrors<
  typeof ForgotPasswordSchema
>["fieldErrors"];
