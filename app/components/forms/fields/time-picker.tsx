import { useNavigation } from "@remix-run/react";
import { FieldContainer, FieldContainerProps } from "./field-container";

interface TimePickerProps
  extends Omit<
      React.ComponentProps<"input">,
      "className" | "aria-disabled" | "disabled"
    >,
    Omit<FieldContainerProps, "children" | "id"> {}

export const TimePicker = ({
  label,
  message,
  className,
  ...props
}: TimePickerProps) => {
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
        type="time"
        aria-disabled={isSubmitting}
        disabled={isSubmitting}
        className={`field-default ${
          isSubmitting && "field-submitting"
        } bg-inherit hover:bg-secondary-background dark:hover:bg-secondary-background-dark outline-none`}
        {...props}
      />
    </FieldContainer>
  );
};
