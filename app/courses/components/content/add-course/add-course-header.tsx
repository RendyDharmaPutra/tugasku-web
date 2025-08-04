import { Plus } from "lucide-react";

export const AddCourseHeader = () => {
  return (
    <section className="flex flex-row items-center gap-3 w-full h-fit ">
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-accent dark:bg-primary-accent-dark animate">
        <Plus className="w-6 h-6 text-primary-background" />
      </div>

      <div className="flex flex-col gap-1">
        <h6 className="font-medium text-2xl text-primary-text dark:text-primary-text-dark animate">
          Tambah Kursus baru
        </h6>
        <p className="font-normal text-base text-secondary-text dark:text-secondary-text-dark animate">
          Buat kursus baru untuk kurikulum kamu
        </p>
      </div>
    </section>
  );
};
