import { useState } from "react";
import { CoursesList } from "./courses-list";
import { CoursesSearch } from "./courses-search";

const dummyCourses = [
  {
    name: "Matematika Dasar",
    schedule: "Senin, 08:00 - 10:00",
  },
  {
    name: "Pemrograman Web",
    schedule: "Selasa, 10:30 - 12:30",
  },
  {
    name: "Basis Data",
    schedule: "Rabu, 13:00 - 15:00",
  },
  {
    name: "Struktur Data",
    schedule: "Kamis, 09:00 - 11:00",
  },
  {
    name: "Jaringan Komputer",
    schedule: "Jumat, 14:00 - 16:00",
  },
];

export const CoursesSidebardContent = () => {
  const [courseQuery, setCourseQuery] = useState("");

  return (
    <section className="flex flex-col items-center w-full h-full ">
      <CoursesSearch query={courseQuery} setQuery={setCourseQuery} />
      <CoursesList courses={dummyCourses} query={courseQuery} />
    </section>
  );
};
