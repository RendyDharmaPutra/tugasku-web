// components/CustomToast.tsx
import { CircleAlert, CircleCheck, X } from "lucide-react";
import { toast } from "react-hot-toast";
import type { Toast } from "react-hot-toast";

interface CustomToastProps {
  t: Toast;
  title: string;
  description?: string;
  type?: "success" | "error" | "default";
}

export const CustomToast = ({
  t,
  title,
  description,
  type = "default",
}: CustomToastProps) => {
  const Icon = type === "success" ? CircleCheck : CircleAlert;

  return (
    <div
      className={`${
        t.visible
          ? "animate-in slide-in-from-top fade-in"
          : "animate-out fade-out"
      } relative px-4 py-3 flex items-start gap-2.5 w-full max-w-sm overflow-hidden rounded-lg border bg-primary-background dark:bg-primary-background-dark shadow-lg pointer-events-auto`}
    >
      {/* Icon */}
      <div className="mt-0.5">
        <Icon className="w-5 h-5 text-primary-text dark:text-primary-text-dark" />
      </div>

      {/* Content Text */}
      <section className="flex flex-col gap-1">
        <h6 className="text-base font-semibold text-primary-text dark:text-primary-text-dark">
          {title}
        </h6>
        {description && (
          <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
            {description}
          </p>
        )}
      </section>

      {/* Dismiss Button */}
      <button
        className="absolute right-2 top-2 p-1 rounded-full border border-border dark:border-border-dark hover:bg-secondary-background dark:hover:bg-secondary-background-dark text-tertiary-text dark:text-tertiary-text-dark hover:text-primary-text dark:hover:text-primary-text-dark"
        onClick={() => toast.dismiss(t.id)}
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
};
