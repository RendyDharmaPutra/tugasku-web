import { useNavigation } from "@remix-run/react";
import { FieldContainer, FieldContainerProps } from "./field-container";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps
  extends Omit<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      "children" | "className" | "aria-disabled" | "disabled"
    >,
    Omit<FieldContainerProps, "children" | "id"> {
  options: SelectOption[];
}

export const SelectField = ({
  label,
  message,
  className,
  options,
  ...props
}: SelectFieldProps) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <FieldContainer
      id={props.id}
      label={label}
      message={message}
      className={className}
    >
      <select
        aria-disabled={isSubmitting}
        disabled={isSubmitting}
        className={`
            appearance-none field-default ${
              isSubmitting && "field-submitting"
            }`}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-primary-text dark:text-primary-text-dark bg-primary-background dark:bg-primary-background-dark"
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Chevron icon */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="w-4 h-4 text-tertiary-text dark:text-tertiary-text-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </FieldContainer>
  );
};
