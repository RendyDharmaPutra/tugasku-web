import { z } from "zod";

export const validateForm = <T extends z.ZodTypeAny>(
  formData: FormData,
  schema: T
) => {
  // Parse form data to Object
  const values = Object.fromEntries(formData);

  // Validating form data values
  const result = schema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    } as const;
  }

  return {
    success: true,
    data: result.data,
  } as const;
};
