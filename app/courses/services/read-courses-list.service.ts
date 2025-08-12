import * as Sentry from "@sentry/remix";
import { SupabaseClient } from "@supabase/supabase-js";
import { ActionResult } from "~/types/action-result";
import { FailureResult, SuccessResult } from "~/utils/action-result";
import { CourseType } from "../../types/models";
import { getAuthUser } from "~/services/auth";

export type ReadCoursesListResponse = ActionResult<
  { courses: CourseType[]; total: number },
  null
>;

export async function readCoursesList(
  supabase: SupabaseClient
): Promise<ReadCoursesListResponse> {
  try {
    const user = await getAuthUser(supabase);

    const { data: courses, error } = await supabase
      .from("course")
      .select("*")
      .eq("user_id", user.id);

    //   ! TODO : PERBAIKI EXPECTED ERROR HANDLING
    if (error) {
      return FailureResult(error.message, null);
    }

    return SuccessResult("Berhasil mendapatkan data kursus", {
      courses: courses as CourseType[],
      total: courses.length,
    });
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);

    return FailureResult("Terjadi kesalahan yang tidak terduga", null);
  }
}
