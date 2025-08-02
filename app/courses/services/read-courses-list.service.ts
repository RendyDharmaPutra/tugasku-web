import * as Sentry from "@sentry/remix";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { ActionResult } from "~/types/action-result";
import { FailureResult, SuccessResult } from "~/utils/action-result";
import { CourseType } from "../types/course-type";

export type ReadCoursesListResponse = ActionResult<CourseType[], null>;

export async function readCoursesList(
  supabase: SupabaseClient,
  user: User
): Promise<ReadCoursesListResponse> {
  try {
    const { data: courses, error } = await supabase
      .from("course")
      .select("*")
      .eq("user_id", user.id);

    //   ! TODO : PERBAIKI EXPECTED ERROR HANDLING
    if (error) {
      return FailureResult(error.message, null);
    }

    return SuccessResult(
      "Berhasil mendapatkan data kursus",
      courses as CourseType[]
    );
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return FailureResult("Terjadi kesalahan yang tidak terduga", null);
  }
}
