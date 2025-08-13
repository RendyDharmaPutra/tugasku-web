import { Await, useLoaderData } from "@remix-run/react";
import { ReadCoursesListResponse } from "~/courses/services/";
import { CourseList } from "./course-list";
import { isActionFailure } from "~/utils/action-result";
import { DataErrorBoundary } from "~/components/boundary";
import { Suspense } from "react";
import { LoadingSpinner } from "~/components/loading";

interface SidebarContentProps {
  query: string;
}

export const SidebarContent = (props: SidebarContentProps) => {
  const { courses } = useLoaderData<{
    courses: Promise<ReadCoursesListResponse>;
  }>();

  return (
    <section className="flex flex-col items-center w-full h-full overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={courses}>
          {(coursesData) =>
            isActionFailure(coursesData) ? (
              <DataErrorBoundary
                title="Gagal mendapatkan data kursus"
                description={coursesData.message}
              />
            ) : (
              <CourseList
                courses={coursesData.data.courses}
                query={props.query}
              />
            )
          }
        </Await>
      </Suspense>
    </section>
  );
};
