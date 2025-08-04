import { useNavigation } from "@remix-run/react";
import { LoaderCircle } from "lucide-react";

interface SecondaryBtnProps extends React.ComponentProps<"button"> {
  label: string;
}

export const SecondaryBtn = ({ label, ...props }: SecondaryBtnProps) => {
  const { state } = useNavigation();

  const isSubmitting = state === "submitting";

  return (
    <button
      type="button"
      aria-disabled={isSubmitting}
      disabled={isSubmitting}
      className={`px-4 py-2 flex justify-center items-center gap-2 w-full h-fit rounded-xl ${
        !isSubmitting
          ? "bg-primary-background dark:bg-primary-background-dark"
          : "bg-tertiary-background dark:bg-tertiary-background-dark"
      }  border border-tertiary-background dark:border-tertiary-background-dark hover:bg-tertiary-background dark:hover:bg-tertiary-background-dark active:bg-primary-background dark:active:bg-primary-background-dark text-primary-text dark:text-primary-text-dark animate`}
      {...props}
    >
      {isSubmitting && <LoaderCircle className="w-4 h-4 animate-spin" />}
      {label}
    </button>
  );
};
