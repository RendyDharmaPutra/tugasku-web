import { useState } from "react";
import { CoursesSearch } from "./courses-search";
import { useLoaderData } from "@remix-run/react";
import { ReadCoursesListResponse } from "~/courses/services/";
import { CoursesList } from "./courses-list";
import { isActionFailure } from "~/utils/action-result";
import { DataErrorBoundary } from "~/components/boundary";

export const CoursesSidebardContent = () => {
  const { courses } = useLoaderData<{
    courses: ReadCoursesListResponse;
  }>();
  const [courseQuery, setCourseQuery] = useState("");

  return (
    <section className="flex flex-col items-center w-full h-full ">
      <CoursesSearch query={courseQuery} setQuery={setCourseQuery} />
      {isActionFailure(courses) ? (
        <DataErrorBoundary
          title="Gagal mendapatkan data kursus"
          description={courses.message}
        />
      ) : (
        <CoursesList courses={courses.data.courses} query={courseQuery} />
      )}
    </section>
  );
};
