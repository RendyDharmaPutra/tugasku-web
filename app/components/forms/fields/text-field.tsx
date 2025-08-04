import { useNavigation } from "@remix-run/react";
import { FieldContainer, FieldContainerProps } from "./field-container";

interface TextFieldProps
  extends Omit<
      React.ComponentProps<"input">,
      "className" | "aria-disabled" | "disabled"
    >,
    Omit<FieldContainerProps, "children" | "id"> {}

export const TextField = ({
  label,
  message,
  className,
  ...props
}: TextFieldProps) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <FieldContainer
      id={props.id}
      label={label}
      message={message}
      className={className}
    >
      <input
        type="text"
        aria-disabled={isSubmitting}
        disabled={isSubmitting}
        className={`field-default ${isSubmitting && "field-submitting"}`}
        {...props}
      />
    </FieldContainer>
  );
};
