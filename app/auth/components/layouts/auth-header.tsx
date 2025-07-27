import { BookOpen } from "lucide-react";

interface AuthHeaderProps {
  title: string;
  description: string;
}

export const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <section className="flex flex-col justify-center gap-4 md:gap-5 w-full h-fit ">
      {/* App Logo */}
      <section className="flex justify-center items-center w-full h-fit ">
        <div className="flex justify-center items-center w-14 md:w-16 h-14 md:h-16 rounded-full bg-primary-accent dark:bg-primary-accent-dark">
          <BookOpen className="w-7 md:w-8 h-7 md:h-8 text-primary-background" />
        </div>
      </section>

      {/* Headline */}
      <section className="flex flex-col justify-center items-center gap-1 md:gap-1.5 w-full h-fit ">
        <h6 className="w-full text-center font-medium text-2xl md:text-3xl text-primary-text dark:text-primary-text-dark">
          {title}
        </h6>
        <p className="w-full text-center font-normal text-sm md:text-base text-secondary-text dark:text-secondary-text-dark">
          {description}
        </p>
      </section>
    </section>
  );
};
