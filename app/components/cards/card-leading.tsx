import { LucideIcon } from "lucide-react";

interface CardLeadingProps {
  icon: LucideIcon;
}

export const CardLeading = (props: CardLeadingProps) => {
  return (
    <div className="p-2 w-[42px] h-[42px] text-center rounded-full  bg-primary-accent dark:bg-primary-accent-dark animate">
      <props.icon className="w-6 h-6 text-primary-background" />
    </div>
  );
};
