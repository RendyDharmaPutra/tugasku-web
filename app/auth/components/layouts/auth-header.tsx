import { BookOpen } from "lucide-react";

type AuthHeaderProps = {
  title: string;
  description: string;
};

export const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <section className="flex flex-col justify-center gap-4 md:gap-5 w-full h-fit ">
      {/* App Logo */}
      <section className="flex justify-center items-center w-full h-fit ">
        <div className="flex justify-center items-center w-14 md:w-16 h-14 md:h-16 rounded-full bg-primary-accent dark:bg-primary-accent-dark">
          <BookOpen className="w-6 h-6 text-primary-background" />
        </div>
      </section>

      {/* Headline */}
      <section className="flex flex-col justify-center items-center gap-1 md:gap-1.5 w-full h-fit ">
        <h6 className="w-full text-center font-medium text-xl md:text-2xl text-primary-text dark:text-primary-text-dark">
          {title}
        </h6>
        <p className="w-full text-center font-normal text-base text-secondary-text dark:text-secondary-text-dark">
          {description}
        </p>
      </section>
    </section>
  );
};
