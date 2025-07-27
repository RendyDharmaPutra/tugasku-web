import { PasswordInput, TextInput } from "~/components/forms";
import { useFieldErrors } from "~/hooks";
import { LoginFieldErrors } from "~/auth/schemas";
import { AuthForm } from "./auth-form";
import { Link } from "@remix-run/react";

export const LoginForm = () => {
  const { email, password } = useFieldErrors<LoginFieldErrors>();

  return (
    <AuthForm label="Login">
      <TextInput
        label="Alamat Email"
        id="email"
        name="email"
        type="email"
        placeholder="example@mail.com"
        message={email}
      />
      <PasswordInput
        label="Password"
        id="password"
        name="password"
        placeholder="Masukkan password"
        message={password}
      />
      <section className="w-full text-end ">
        <Link
          to={"/auth/forgot-password"}
          className="text-sm md:text-base text-secondary-accent dark:text-secondary-accent-dark hover:text-tertiary-accent dark:hover:text-tertiary-accent-dark animate"
        >
          Lupa password?
        </Link>
      </section>
    </AuthForm>
  );
};
