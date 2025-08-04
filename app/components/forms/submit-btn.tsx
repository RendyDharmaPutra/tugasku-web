import { useNavigation } from "@remix-run/react";
import { LoaderCircle } from "lucide-react";

interface SubmitBtnProps extends React.ComponentProps<"button"> {
  label: string;
}

export const SubmitBtn = ({ label, ...props }: SubmitBtnProps) => {
  const { state } = useNavigation();

  const isSubmitting = state === "submitting";

  return (
    <button
      type="submit"
      aria-disabled={isSubmitting}
      disabled={isSubmitting}
      className={`px-4 py-2 flex justify-center items-center gap-2 w-full h-fit rounded-xl ${
        isSubmitting && "bg-secondary-accent dark:bg-secondary-accent-dark"
      }  primary-btn-color text-primary-background animate`}
      {...props}
    >
      {isSubmitting && (
        <LoaderCircle className="w-4 h-4 text-primary-background animate-spin" />
      )}
      {label}
    </button>
  );
};
