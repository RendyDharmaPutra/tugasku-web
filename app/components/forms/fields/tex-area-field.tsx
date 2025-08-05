import { useNavigation } from "@remix-run/react";
import { FieldContainer, FieldContainerProps } from "./field-container";

interface TextAreaFieldProps
  extends Omit<
      React.ComponentProps<"textarea">,
      "className" | "aria-disabled" | "disabled" | "rows"
    >,
    Omit<FieldContainerProps, "children" | "id"> {
  rows?: number;
}

export const TextAreaField = ({
  label,
  message,
  className,
  rows = 4,
  ...props
}: TextAreaFieldProps) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <FieldContainer
      id={props.id}
      label={label}
      message={message}
      className={className}
    >
      <textarea
        rows={rows}
        aria-disabled={isSubmitting}
        disabled={isSubmitting}
        className={`field-default ${isSubmitting && "field-submitting"}`}
        {...props}
      />
    </FieldContainer>
  );
};
