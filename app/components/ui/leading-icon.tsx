import { LucideIcon } from "lucide-react";

interface LeadingIconProps {
  icon: LucideIcon;
  color?: "primary-accent" | "danger" | "success";
  className: string;
}

export const LeadingIcon = ({
  className,
  color = "primary-accent",
  ...props
}: LeadingIconProps) => {
  return (
    <div
      className={`${className} text-primary-background rounded-full bg-${color} dark:bg-${color}-dark animate`}
    >
      <props.icon className="w-full h-full" />
    </div>
  );
};
