import { CourseType } from "~/courses/types/";
import { CourseCard } from "../../cards";
import { BookMarked, SearchX } from "lucide-react";
import { FeedbackState } from "~/components/boundary/feedback-state";

interface CoursesListProps {
  courses: CourseType[];
  query: string;
}

export const CoursesList = (props: CoursesListProps) => {
  const courses = props.query
    ? props.courses.filter((course) => course.name.includes(props.query))
    : props.courses;
  // ! TODO : PERBAIKI PENGECEKAN PANJANG DATA : DATA KURSUS ? QUERY ? DATA

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto ">
      {courses.length < 1 ? (
        props.query.length < 1 ? (
          <FeedbackState
            title="Belum ada data kursus"
            description="Kamu belum memiliki data kursus sama sekali. Tambahkan kursus pertamamu dan mulai mengelola pembelajaranmu."
            color="primary-accent"
            icon={BookMarked}
          />
        ) : (
          <FeedbackState
            title="Kursus tidak ditemukan"
            description={`Kursus dengan kata kunci "${props.query}" tidak ditemukan. Silakan coba kata kunci lain atau periksa kembali ejaanmu.`}
            color="primary-accent"
            icon={SearchX}
          />
        )
      ) : (
        courses.map((course, idx) => <CourseCard key={idx} course={course} />)
      )}
    </div>
  );
};
