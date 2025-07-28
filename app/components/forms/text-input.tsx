import { useNavigation } from "@remix-run/react";
// import { LucideIcon } from "lucide-react";

interface TextInputProps extends React.ComponentProps<"input"> {
  label: string;
  // leading: LucideIcon;
  message?: string;
}

export const TextInput = ({ label, message, ...props }: TextInputProps) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <div className="flex flex-col gap-1.5 md:gap-2 w-full h-fit">
      <label
        htmlFor={props.id}
        className="font-medium text-sm md:text-base text-secondary-text dark:text-secondary-text-dark animate"
      >
        {label}
      </label>

      {/* Input Content */}
      <div className="relative">
        <input
          aria-disabled={isSubmitting}
          disabled={isSubmitting}
          className={`
          p-3 w-full h-fit font-normal text-sm md:text-base text-primary-text dark:text-primary-text-dark placeholder:text-tertiary-text dark:placeholder:text-tertiary-text-dark rounded-xl border border-border dark:border-border-dark ${
            isSubmitting &&
            "bg-secondary-background dark:bg-secondary-background-dark"
          } bg-inherit hover:bg-secondary-background dark:hover:bg-secondary-background-dark animate  
          outline-none `}
          {...props}
        />
        {/* Leading Icon */}
        {/* <props.leading className="absolute top-3 left-3 md:top-[17px] md:left-[17px] w-4 h-4 text-tertiary-text dark:text-tertiary-text-dark" /> */}
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
