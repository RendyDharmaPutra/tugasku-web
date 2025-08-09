import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  DetailCourseBody,
  DetailCourseHeader,
} from "~/courses/components/content/detail-course";
import { readCourseDetail } from "~/courses/services";
import { isActionSuccess } from "~/utils/action-result";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const response = new Response();
  const courseCode = (params as { code: string }).code;

  const courseData = await readCourseDetail(request, response, courseCode);

  return json(
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
      {isActionSuccess(courseData) ? (
        <>
          <DetailCourseHeader {...courseData.data} />
          <DetailCourseBody {...courseData.data} />
        </>
      ) : (
        <h1>Hello</h1>
      )}
    </main>
  );
}
