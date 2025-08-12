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

  if (isActionFailure(courses))
    return (
      <DataErrorBoundary
        title="Gagal mendapatkan data kursus"
        description={courses.message}
      />
    );

  return (
    <section className="flex flex-col items-center w-full h-full ">
      <CoursesList courses={[]} query={props.query} />
    </section>
  );
};
