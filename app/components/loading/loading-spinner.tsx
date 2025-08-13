import { LoaderCircle } from "lucide-react";

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner = ({
  className = "w-16 h-16",
}: LoadingSpinnerProps) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <LoaderCircle
        className={`${className} text-primary-accent dark:text-primary-accent-dark animate animate-spin`}
      />
    </div>
  );
};
