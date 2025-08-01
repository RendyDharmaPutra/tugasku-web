import { CourseCard } from "../../cards";

interface CoursesListProps {
  courses: any[];
  query: string;
}

export const CoursesList = (props: CoursesListProps) => {
  const courses = props.query
    ? props.courses.filter((course) => course.name.includes(props.query))
    : props.courses;

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto ">
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  );
};
