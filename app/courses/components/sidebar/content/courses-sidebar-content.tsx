import { useLoaderData } from "@remix-run/react";
import { ReadCoursesListResponse } from "~/courses/services/";
import { CoursesList } from "./courses-list";
import { isActionFailure } from "~/utils/action-result";
import { DataErrorBoundary } from "~/components/boundary";

interface CoursesSidebarContentProps {
  query: string;
}

export const CoursesSidebardContent = (props: CoursesSidebarContentProps) => {
  const { courses } = useLoaderData<{
    courses: ReadCoursesListResponse;
  }>();

  return (
    <section className="flex flex-col items-center w-full h-full ">
      {isActionFailure(courses) ? (
        <DataErrorBoundary
          title="Gagal mendapatkan data kursus"
          description={courses.message}
        />
      ) : (
        <CoursesList courses={courses.data.courses} query={props.query} />
      )}
    </section>
  );
};
