import { CourseCard } from "../../cards";
import { BookMarked, SearchX } from "lucide-react";
import { useMemo } from "react";
import { FeedbackState } from "~/components/boundary";
import { CourseType } from "~/types/models";

interface CoursesListProps {
  courses: CourseType[];
  query: string;
}

export const CoursesList = ({ courses, query }: CoursesListProps) => {
  // return Boundary jika data kosong
  if (courses.length < 1)
    return (
      <FeedbackState
        title="Belum ada data kursus"
        description="Kamu belum memiliki data kursus sama sekali. Tambahkan kursus pertamamu dan mulai mengelola pembelajaranmu."
        color="primary"
        icon={BookMarked}
      />
    );

  const showCourses = useMemo(() => {
    return query
      ? courses.filter((course) => course.name.includes(query))
      : courses;
  }, [courses, query]);

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto">
      {showCourses.length < 1 ? (
        <FeedbackState
          title="Kursus tidak ditemukan"
          description={`Kursus dengan kata kunci "${query}" tidak ditemukan. Silakan coba kata kunci lain atau periksa kembali ejaanmu.`}
          color="primary"
          icon={SearchX}
        />
      ) : (
        showCourses.map((course) => (
          <CourseCard key={course.code} course={course} />
        ))
      )}
    </div>
  );
};
