import { File } from "lucide-react";

export const BodyHeader = () => {
  return (
    <section className="flex flex-col gap-2 w-full h-fit">
      <div className="flex flex-row items-center gap-2 w-full h-fit">
        <File className="w-6 h-6 text-primary-accent dark:text-primary-accent-dark animate" />
        <h6 className="font-semibold text-2xl text-primary-text dark:text-primary-text-dark animate">
          Informasi Kursus
        </h6>
      </div>
      <p className="font-normal text-base text-secondary-text dark:text-secondary-text-dark animate">
        Isi kolom di bawah untuk membuat kursus baru
      </p>
    </section>
  );
};
