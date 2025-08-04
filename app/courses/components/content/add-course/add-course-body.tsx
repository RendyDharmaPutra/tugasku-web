import { AddCourseBodyForm, AddCourseBodyHeader } from "./body";

export const AddCourseBody = () => {
  return (
    <section className="p-6 flex flex-col gap-8 w-full h-fit rounded-xl border border-border dark:border-border-dark animate">
      {/* Header */}
      <AddCourseBodyHeader />

      {/* Form */}
      <AddCourseBodyForm />
    </section>
  );
};
