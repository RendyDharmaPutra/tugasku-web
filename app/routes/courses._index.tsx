import { BookMarked } from "lucide-react";

export default function CoursePlaceholder() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 w-full h-full bg-primary-background dark:bg-primary-background-dark animate">
      <BookMarked className="w-16 h-16 text-secondary-text dark:text-secondary-text-dark animate" />

      <div className="flex flex-col items-center w-full gap-2 ">
        <h6 className="font-medium text-xl text-primary-text dark:text-primary-text-dark animate">
          Belum ada kursus yang dipilih
        </h6>
        <p className="w-[70%] xl:w-[35%] text-center font-normal text-base text-secondary-text dark:text-secondary-text-dark animate">
          Pilih kursus dari daftar untuk melihat detailnya. Anda dapat mencari
          kursus tertentu menggunakan kolom pencarian.
        </p>
      </div>
    </section>
  );
}
