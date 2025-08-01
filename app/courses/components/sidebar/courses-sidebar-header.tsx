import { Link } from "@remix-run/react";
import { ChevronLeft, Plus } from "lucide-react";
import { ActionBtn } from "~/components/ui";

export const CoursesSidebarHeader = () => {
  return (
    <section className="p-4 flex flex-col gap-4 w-full h-fit border-b-[0.25px] border-border dark:border-border-dark animate">
      {/* Headline */}
      <div className="flex flex-row justify-between w-full ">
        <h4 className="font-semibold text-xl text-primary-text dark:text-primary-text-dark animate">
          Daftar Kursus
        </h4>
        <ActionBtn className="p-1 w-8 h-8">
          <Plus className="w-full h-full text-primary-background dark:text-primary-background-dark animate" />
        </ActionBtn>
      </div>
      {/* Trailing */}
      <Link
        to={"/"}
        className="flex flex-row items-center w-full font-medium text-sm text-primary-accent dark:text-primary-accent-dark hover:text-secondary-accent dark:hover:text-secondary-accent-dark animate"
      >
        <ChevronLeft />
        Kembali ke Dashboard
      </Link>
    </section>
  );
};
