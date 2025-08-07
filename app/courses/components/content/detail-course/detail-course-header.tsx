import { BookMarked, Clock } from "lucide-react";
import { LeadingIcon } from "~/components/ui";

interface DetailCourseHeaderProps {
  title: string;
  schedule: string;
}

export const DetailCourseHeader = ({
  title,
  schedule,
}: DetailCourseHeaderProps) => {
  return (
    <section className="flex flex-row items-center gap-4 w-full h-fit">
      {/* Leading Icon */}
      <LeadingIcon icon={BookMarked} className="p-4 w-16 h-16" />

      {/* Text Content */}
      <div className="flex flex-col gap-2 w-full">
        <h4 className="font-medium text-2xl text-primary-text dark:text-primary-text-dark animate">
          {title}
        </h4>
        <div className="flex flex-row items-center gap-2 w-full font-normal text-sm text-secondary-text dark:text-secondary-text-dark animate">
          <Clock className="w-4 h-4" /> {schedule}
        </div>
      </div>
    </section>
  );
};
