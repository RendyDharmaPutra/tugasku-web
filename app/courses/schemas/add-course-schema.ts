import { z } from "zod";

export const AddCourseSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nama Kursus minimal 3 karakter" })
    .max(25, { message: "Nama Kursus maksimal 25 karakter" }),

  semester: z.coerce
    .number("Semester harus berupa angka")
    .min(1, { message: "Minimal Semester 1" })
    .max(20, { message: "Maksimal Semester 20" }),

  description: z
    .string()
    .max(100, { message: "Deskripsi maksimal 100 karakter" })
    .nullable()
    .optional(),

  day: z.string().min(1, { message: "Hari harus dipilih" }),

  start_time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Waktu mulai harus dalam format HH:MM (24 jam)",
  }),

  end_time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Waktu selesai harus dalam format HH:MM (24 jam)",
  }),
});

export type AddCourseSchemaType = z.infer<typeof AddCourseSchema>;

export type AddCourseFieldErrors = z.inferFlattenedErrors<
  typeof AddCourseSchema
>["fieldErrors"];
