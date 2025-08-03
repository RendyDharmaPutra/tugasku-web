import { LucideIcon } from "lucide-react";

export interface FeedbackStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary-accent" | "danger";
  children?: React.ReactNode;
}

export const FeedbackState = ({
  title,
  description,
  color,
  children,
  ...props
}: FeedbackStateProps) => {
  return (
    <section className="py-12 px-4 flex flex-col items-center justify-center gap-4 text-center">
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full bg-${color}/10 dark:bg-${color}-dark/10 animate`}
      >
        <props.icon
          className={`h-8 w-8 text-${color} dark:text-${color}-dark animate`}
        />
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <h3 className="text-lg font-medium text-primary-text dark:text-primary-text-dark animate">
          {title}
        </h3>
        <p className="max-w-sm text-sm text-secondary-text dark:text-secondary-text-dark animate">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
};
