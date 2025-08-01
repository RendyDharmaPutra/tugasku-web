import { LucideIcon } from "lucide-react";

interface CardTrailingProps {
  icon: LucideIcon;
}

export const CardTrailing = (props: CardTrailingProps) => {
  return (
    <section className="flex justify-center items-center w-fit h-full">
      <props.icon className="w-6 h-6 text-primary-accent dark:text-primary-accent-dark animate" />
    </section>
  );
};
