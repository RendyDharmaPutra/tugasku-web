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
        className={`flex items-center justify-center w-14 md:w-16 h-14 md:h-16 rounded-full ${
          background === "primary"
            ? "bg-primary-accent dark:bg-primary-accent-dark"
            : "bg-danger dark:bg-danger-dark"
        } animate`}
      >
        <props.icon
          className={`w-7 md:w-8 h-7 md:h-8 text-primary-background ${
            animate && "animate-spin"
          }`}
        />
      </div>
    </div>
  );
};
