export interface FieldContainerProps {
  id?: string;
  label?: string;
  message?: string;
  className?: string;
  children: React.ReactNode;
}

export const FieldContainer = ({
  id,
  label,
  message,
  className,
  children,
}: FieldContainerProps) => {
  return (
    <div
      className={`flex flex-col gap-1.5 md:gap-2 ${
        className ? className : "w-full h-fit"
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className="font-medium text-sm md:text-base text-secondary-text dark:text-secondary-text-dark animate"
        >
          {label}
        </label>
      )}

      {/* Input or Textarea */}
      <div className="relative">{children}</div>

      {/* Message */}
      {message && (
        <p className="-mt-1 font-normal text-sm text-danger dark:text-danger-dark animate">
          {message}
        </p>
      )}
    </div>
  );
};
