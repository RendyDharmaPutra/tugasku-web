import { Form } from "@remix-run/react";
import { SubmitBtn } from "~/components/forms";

interface AuthFormProps {
  label: string;
  children: React.ReactNode;
}

export const AuthForm = ({ label, children }: AuthFormProps) => {
  return (
    <Form
      method="POST"
      className="px-6 py-6 md:py-8 flex flex-col justify-center gap-5 md:gap-6 w-full h-fit rounded-xl border border-border dark:border-border-dark"
    >
      {children}
      <SubmitBtn label={label} />
    </Form>
  );
};
