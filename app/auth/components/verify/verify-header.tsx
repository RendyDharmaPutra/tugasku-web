import { LucideIcon } from "lucide-react";

export const VerifyHeader = ({
  background,
  animate = false,
  ...props
}: {
  icon: LucideIcon;
  background: "primary" | "danger";
  animate?: boolean;
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={`h-16 w-16 bg-${background} rounded-full flex items-center justify-center`}
      >
        <props.icon
          className={`w-8 h-8 text-primary-background ${
            animate && "animate-spin"
          }`}
        />
      </div>
    </div>
  );
};
