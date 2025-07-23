import { Link } from "@remix-run/react";

type AuthFooterProps = {
  route: "login" | "register";
  label: string;
  highlight: string;
};

export const AuthFooter = ({ route, label, highlight }: AuthFooterProps) => {
  return (
    <div className="-mt-4 p-2.5 flex justify-center items-center w-full h-fit ">
      <p className="w-full text-center font-medium text-base text-tertiary-text dark:text-tertiary-text-dark">
        {label}{" "}
        <Link
          to={`/auth/${route}`}
          className="text-primary-accent dark:text-primary-accent-dark hover:text-secondary-accent dark:hover:text-secondary-accent-dark animate"
        >
          {highlight}
        </Link>
      </p>
    </div>
  );
};
