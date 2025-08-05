import * as Sentry from "@sentry/remix";
import { FailureResult, SuccessResult } from "~/utils/action-result";
import { requireUserSession } from "~/utils/auth-session.server";
import { AddCourseSchemaType } from "../schemas";
import { createSupabaseServerClient } from "~/libs/supabase";
import { generateCourseCode } from "~/utils/generate-course-code";

export async function addCourse(
  request: Request,
  response: Response,
  courseData: AddCourseSchemaType
) {
  try {
    const supabase = createSupabaseServerClient({ request, response });

    const user = await requireUserSession(supabase);

    const code = generateCourseCode(courseData.name);
    const course = { ...courseData, code, user_id: user.id };

    const { error } = await supabase.from("course").insert(course);

    //   ! TODO : PERBAIKI EXPECTED ERROR HANDLING
    if (error) {
      return FailureResult(error.message, null);
    }

    return SuccessResult("Berhasil manambahkan kursus", null);
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return FailureResult("Terjadi kesalahan yang tidak terduga", null);
  }
}
