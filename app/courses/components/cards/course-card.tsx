import { Link } from "@remix-run/react";
import { BookMarked, ChevronRight } from "lucide-react";
import {
  CardLeading,
  CardContent,
  CardTrailing,
} from "../../../components/cards";

interface CourseCardProps {
  name: string;
  schedule: string;
}

export const CourseCard = (props: CourseCardProps) => {
  return (
    <Link
      to={"/courses"}
      className="px-6 py-4 flex flex-row items-center gap-4 w-full h-fit border-b border-b-border/20 dark:border-border-dark/20 animate"
    >
      <CardLeading icon={BookMarked} />
      <CardContent title={props.name} description={props.schedule} />
      <CardTrailing icon={ChevronRight} />
    </Link>
  );
};
