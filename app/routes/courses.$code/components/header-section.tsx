import { BookMarked, Clock } from "lucide-react";
import { Badge, LeadingIcon } from "~/components/ui";
import { ReadCourseDetailResponseData } from "~/courses/services";
import { formatCourseSchedule } from "~/utils/formatter";

interface HeaderSectionProps extends ReadCourseDetailResponseData {}

export const HeaderSection = ({
  name,
  semester,
  day,
  start_time,
  end_time,
}: HeaderSectionProps) => {
  return (
    <section className="flex flex-row items-center gap-4 w-full h-fit">
      {/* Leading Icon */}
      <LeadingIcon icon={BookMarked} className="p-4 w-16 h-16" />

      {/* Text Content */}
      <div className="flex flex-col gap-2 w-full">
        <h4 className="font-medium text-2xl text-primary-text dark:text-primary-text-dark animate">
          {name}
        </h4>
        <div className="flex flex-row gap-4 w-full">
          <Badge title={`Semester ${semester}`} color="primary" />

          <div className="flex flex-row items-center gap-2 font-normal text-sm text-secondary-text dark:text-secondary-text-dark animate">
            <Clock className="w-4 h-4" />{" "}
            {formatCourseSchedule(day, start_time, end_time)}
          </div>
        </div>
      </div>
    </section>
  );
};
