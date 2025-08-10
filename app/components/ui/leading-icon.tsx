import { LucideIcon } from "lucide-react";
import { AccentColor, getAccentColorClasses } from "~/utils/accent-color-map";

interface LeadingIconProps {
  icon: LucideIcon;
  color?: AccentColor;
  className: string;
}

export const LeadingIcon = ({
  className,
  color = "primary",
  ...props
}: LeadingIconProps) => {
  const { bg } = getAccentColorClasses(color, false);

  return (
    <div
      className={`${className} text-primary-background rounded-full ${bg} animate`}
    >
      <props.icon className="w-full h-full" />
    </div>
  );
};
