import { LucideIcon } from "lucide-react";
import { useRef } from "react";

type TextInputProps = React.ComponentProps<"input"> & {
  label: string;
  leading: LucideIcon;
  message?: string;
};

export const TextInput = ({ label, message, ...props }: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col gap-2 w-full h-fit">
      <label
        htmlFor={props.id}
        className="font-medium text-base text-secondary-text dark:text-secondary-text-dark"
      >
        {label}
      </label>

      {/* Input Content */}
      <div
        onClick={handleWrapperClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleWrapperClick();
          }
        }}
        role="button"
        tabIndex={props.tabIndex}
        className="p-3.5 flex flex-row items-center gap-2 w-full h-fit rounded-xl border border-border dark:border-border-dark hover:bg-secondary-background dark:hover:bg-secondary-background-dark cursor-text animate"
      >
        <props.leading className="w-5 h-5 text-tertiary-text dark:text-tertiary-text-dark" />
        <input
          ref={inputRef}
          className="w-full font-normal text-base text-primary-text dark:text-primary-text-dark placeholder:text-tertiary-text dark:placeholder:text-tertiary-text-dark outline-none border-none bg-inherit"
          {...props}
        />
      </div>

      {/* Message */}
      {message && (
        <p className="-mt-1 font-normal text-sm text-danger dark:text-danger-dark">
          {message}
        </p>
      )}
    </div>
  );
};
