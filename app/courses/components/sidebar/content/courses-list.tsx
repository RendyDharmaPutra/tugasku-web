import { CourseType } from "~/courses/types/";
import { CourseCard } from "../../cards";
import { BookMarked, SearchX } from "lucide-react";
import { FeedbackState } from "~/components/boundary";

interface CoursesListProps {
  courses: CourseType[];
  query: string;
}

export const CoursesList = (props: CoursesListProps) => {
  const showCourses = props.query
    ? props.courses.filter((course) => course.name.includes(props.query))
    : props.courses;

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto ">
      {props.courses.length < 1 ? (
        <FeedbackState
          title="Belum ada data kursus"
          description="Kamu belum memiliki data kursus sama sekali. Tambahkan kursus pertamamu dan mulai mengelola pembelajaranmu."
          color="primary"
          icon={BookMarked}
        />
      ) : showCourses.length < 1 ? (
        <FeedbackState
          title="Kursus tidak ditemukan"
          description={`Kursus dengan kata kunci "${props.query}" tidak ditemukan. Silakan coba kata kunci lain atau periksa kembali ejaanmu.`}
          color="primary"
          icon={SearchX}
        />
      ) : (
        showCourses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))
      )}
    </div>
  );
};
