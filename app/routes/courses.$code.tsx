import {
  DetailCourseBody,
  DetailCourseHeader,
} from "~/courses/components/content/detail-course";

/**
 * TODO : Mengubah props berdasarkan data yang diterima dari server
 *
 */

export default function CourseDetailPage() {
  return (
    <main className="p-6 flex flex-col items-center gap-6 w-full h-screen bg-primary-background dark:bg-primary-background-dark animate overflow-y-auto">
      <DetailCourseHeader
        title="Lorem ipsum dolor sit amet consectetur."
        schedule="Rabu, 19:00 - 21:00"
      />
      <DetailCourseBody />
    </main>
  );
}
