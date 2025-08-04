import {
  AddCourseBody,
  AddCourseHeader,
} from "~/courses/components/content/add-course";

export default function AddCoursePage() {
  return (
    <main className="p-6 flex flex-col items-center gap-8 w-full h-screen bg-primary-background dark:bg-primary-background-dark animate overflow-y-auto">
      <AddCourseHeader />
      <AddCourseBody />
    </main>
  );
}
