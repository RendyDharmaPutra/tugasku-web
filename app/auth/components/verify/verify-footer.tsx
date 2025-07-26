import { Link } from "@remix-run/react";

export const VerifyFooter = ({
  route,
  content,
}: {
  route: "register" | "login";
  content: string;
}) => {
  return (
    <Link
      to={`/auth/${route}`}
      className="text-primary-accent dark:text-primary-accent-dark hover:text-secondary-accent dark:hover:text-secondary-accent-dark animate"
    >
      {content}
    </Link>
  );
};
