import { Link, useLoaderData } from "@remix-run/react";
import { ChevronLeft, Plus } from "lucide-react";
import { ReadCoursesListResponse } from "~/courses/services";
import { isActionSuccess } from "~/utils/action-result";
import { CoursesSearch } from "./content/courses-search";

interface CoursesSidebarHeaderProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const CoursesSidebarHeader = (props: CoursesSidebarHeaderProps) => {
  const { courses } = useLoaderData<{
    courses: ReadCoursesListResponse;
  }>();

  return (
    <section className="p-4 flex flex-col gap-5 w-full h-fit border-b-[0.25px] border-border dark:border-border-dark animate">
      <Link to={"/"} className="inline-btn">
        <ChevronLeft />
        Kembali ke Dashboard
      </Link>

      <div className="flex flex-col gap-1 w-full ">
        <h4 className="font-semibold text-xl text-primary-text dark:text-primary-text-dark animate">
          Daftar Kursus
        </h4>
        {isActionSuccess(courses) && (
          <p className="text-sm text-secondary-text dark:text-secondary-text-dark animate">
            {courses.data.total} kursus tersedia
          </p>
        )}
      </div>

      <Link
        to={"/courses/add"}
        prefetch="intent"
        className="btn w-full h-fit font-medium text-primary-background primary-btn-color animate"
      >
        <Plus className="w-5 h-5 " />
        Tambah Kursus Baru
      </Link>

      <CoursesSearch query={props.query} setQuery={props.setQuery} />
    </section>
  );
};
