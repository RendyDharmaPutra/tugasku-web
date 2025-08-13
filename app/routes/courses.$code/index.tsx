import { LoaderFunctionArgs } from "@remix-run/node";
import { Await, defer, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { DataErrorBoundary } from "~/components/boundary";
import { LoadingSpinner } from "~/components/loading";
import { BodySection, HeaderSection } from "./components";
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
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={courseData}>
          {(courseData) =>
            isActionSuccess(courseData) ? (
              <>
                <HeaderSection {...courseData.data} />
                <BodySection {...courseData.data} />
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
