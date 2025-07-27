import { Form } from "@remix-run/react";
import { SubmitBtn } from "~/components/forms";

type AuthFormProps = {
  label: "Daftar" | "Login";
  children: React.ReactNode;
};

export const AuthForm = ({ label, children }: AuthFormProps) => {
  return (
    <Form
      method="POST"
      className="px-6 py-6 md:py-8 flex flex-col justify-center gap-6 w-full h-fit rounded-xl border border-border dark:border-border-dark"
    >
      {children}
      <SubmitBtn label={label} />
    </Form>
  );
};
