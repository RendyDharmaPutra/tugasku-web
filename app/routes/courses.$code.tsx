import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Await, defer, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { DataErrorBoundary } from "~/components/boundary";
import {
  DetailCourseBody,
  DetailCourseHeader,
} from "~/courses/components/content/detail-course";
import { readCourseDetail } from "~/courses/services";
import { isActionSuccess } from "~/utils/action-result";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const response = new Response();
  const courseCode = (params as { code: string }).code;

  const courseData = readCourseDetail(request, response, courseCode);

  return defer(
    {
      courseData,
    },
    { headers: response.headers }
  );
}

export default function CourseDetailPage() {
  const { courseData } = useLoaderData<typeof loader>();

  return (
    <main className="p-6 flex flex-col items-center gap-6 w-full h-screen bg-primary-background dark:bg-primary-background-dark animate overflow-y-auto">
      <Suspense fallback={<p className="text-2xl text-white">Loading</p>}>
        <Await resolve={courseData}>
          {(courseData) =>
            isActionSuccess(courseData) ? (
              <>
                <DetailCourseHeader {...courseData.data} />
                <DetailCourseBody {...courseData.data} />
              </>
            ) : (
              <section className="flex justify-center items-center w-full h-full">
                <DataErrorBoundary
                  title="Gagal mendapatkan data kursus"
                  description={courseData.message}
                />
              </section>
            )
          }
        </Await>
      </Suspense>
    </main>
  );
}
