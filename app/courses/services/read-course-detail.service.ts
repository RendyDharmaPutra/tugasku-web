import * as Sentry from "@sentry/remix";
import { ActionResult } from "~/types/action-result";
import { FailureResult, SuccessResult } from "~/utils/action-result";
import { CourseType, TaskType } from "../../types/models";
import { createSupabaseServerClient } from "~/libs/supabase";
import { requireUserSession } from "~/utils/auth-session.server";

export type ReadCourseDetailResponse = ActionResult<
  ReadCourseDetailResponseData,
  null
>;

export type ReadCourseDetailResponseData = CourseType & {
  tasks: TaskType[];
  materialCount: number;
};

export async function readCourseDetail(
  request: Request,
  response: Response,
  courseCode: string
): Promise<ReadCourseDetailResponse> {
  const supabase = createSupabaseServerClient({ request, response });

  const user = await requireUserSession(supabase);

  try {
    // Ambil data kursus
    const { data: course, error: courseError } = await supabase
      .from("course")
      .select("*")
      .match({ user_id: user.id, code: courseCode })
      .single();

    if (courseError) {
      return FailureResult(courseError.message, null);
    }
    if (!course) {
      return FailureResult("Kursus tidak ditemukan", null);
    }

    // Ambil semua task terkait kursus ini
    const { data: tasks, error: tasksError } = await supabase
      .from("task")
      .select("*")
      .eq("course_id", course.id)
      .order("deadline", { ascending: true });

    if (tasksError) {
      return FailureResult(tasksError.message, null);
    }

    // Ambil jumlah materi terkait kursus ini
    const { count: materialCount, error: materialError } = await supabase
      .from("course_material")
      .select("*", { count: "exact", head: true })
      .eq("course_id", course.id);

    if (materialError) {
      return FailureResult(materialError.message, null);
    }

    // Return hasil gabungan
    return SuccessResult("Berhasil mendapatkan detail kursus", {
      ...(course as CourseType),
      tasks: (tasks as TaskType[]) ?? ([] as TaskType[]),
      materialCount: materialCount ?? 0,
    });
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return FailureResult("Terjadi kesalahan yang tidak terduga", null);
  }
}
