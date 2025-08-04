import { useNavigation } from "@remix-run/react";

interface TextInputProps extends React.ComponentProps<"input"> {
  as?: "input" | "textarea";
  label?: string;
  message?: string;
  rows?: number; // khusus textarea
}

export const TextInput = ({
  as = "input",
  label,
  message,
  rows = 4,
  ...props
}: TextInputProps) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  const commonClassNames = `
    p-3 w-full font-normal text-sm md:text-base
    text-primary-text dark:text-primary-text-dark
    placeholder:text-tertiary-text dark:placeholder:text-tertiary-text-dark
    rounded-xl border border-border dark:border-border-dark
    bg-inherit hover:bg-secondary-background dark:hover:bg-secondary-background-dark
    outline-none animate
    ${
      isSubmitting
        ? "bg-secondary-background dark:bg-secondary-background-dark"
        : ""
    }
  `;

  return (
    <div className="flex flex-col gap-1.5 md:gap-2 w-full h-fit">
      {label && (
        <label
          htmlFor={props.id}
          className="font-medium text-sm md:text-base text-secondary-text dark:text-secondary-text-dark animate"
        >
          {label}
        </label>
      )}

      {/* Input or Textarea */}
      <div className="relative">
        {as === "textarea" ? (
          <textarea
            rows={rows}
            aria-disabled={isSubmitting}
            disabled={isSubmitting}
            className={commonClassNames}
            {...(props as React.ComponentProps<"textarea">)}
          />
        ) : (
          <input
            type="text"
            aria-disabled={isSubmitting}
            disabled={isSubmitting}
            className={commonClassNames}
            {...props}
          />
        )}
      </div>

      {/* Message */}
      {message && (
        <p className="-mt-1 font-normal text-sm text-danger dark:text-danger-dark animate">
          {message}
        </p>
      )}
    </div>
  );
};
