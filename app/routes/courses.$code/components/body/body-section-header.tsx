import { LucideIcon } from "lucide-react";
import React from "react";

interface BodySectionHeaderProps {
  icon: LucideIcon;
  title: string;
  children?: React.ReactNode;
}

export const BodySectionHeader = ({
  title,
  children,
  ...props
}: BodySectionHeaderProps) => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-fit">
      {/* Headline */}
      <div className="flex flex-row items-center gap-2 w-fit h-fit">
        <props.icon className="w-5 h-5 text-primary-accent dark:text-primary-accent-dark animate" />
        <h6 className="font-medium text-lg text-primary-text dark:text-primary-text-dark animate">
          {title}
        </h6>
      </div>
      {/* Extended Element. eg, action button */}
      {children}
    </div>
  );
};
