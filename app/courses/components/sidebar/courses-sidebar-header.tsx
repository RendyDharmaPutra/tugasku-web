import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { ChevronLeft, Plus } from "lucide-react";
import { ActionBtn } from "~/components/ui";
import { ReadCoursesListResponse } from "~/courses/services";
import { isActionSuccess } from "~/utils/action-result";

export const CoursesSidebarHeader = () => {
  const { courses } = useLoaderData<{
    courses: ReadCoursesListResponse;
  }>();
  const navigate = useNavigate();

  return (
    <section className="p-4 flex flex-col gap-5 w-full h-fit border-b-[0.25px] border-border dark:border-border-dark animate">
      <Link
        to={"/"}
        className="flex flex-row items-center w-full font-medium text-sm text-primary-accent dark:text-primary-accent-dark hover:text-secondary-accent dark:hover:text-secondary-accent-dark animate"
      >
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

      <ActionBtn
        onClick={() => navigate("/courses/add")}
        className="py-2.5 flex flex-row justify-center items-center gap-2.5 w-full text-primary-background"
      >
        <Plus className="w-5 h-5 " />
        Tambah Kursus Baru
      </ActionBtn>
    </section>
  );
};
