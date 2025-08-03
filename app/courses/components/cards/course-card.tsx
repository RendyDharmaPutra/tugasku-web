import { Link } from "@remix-run/react";
import { BookMarked, ChevronRight } from "lucide-react";
import { CardLeading, CardContent, CardTrailing } from "~/components/cards";
import { CourseType } from "~/courses/types";
import { formatCourseSchedule } from "~/utils/formatter";

interface CourseCardProps {
  course: CourseType;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      to={`/courses/${course.code}`}
      className="px-6 py-4 flex flex-row items-center gap-4 w-full h-fit border-b border-b-border dark:border-border-dark animate"
    >
      <CardLeading icon={BookMarked} />
      <CardContent
        title={course.name}
        description={formatCourseSchedule(
          course.day,
          course.start_time,
          course.end_time
        )}
      />
      <CardTrailing icon={ChevronRight} />
    </Link>
  );
};
