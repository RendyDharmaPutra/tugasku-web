import { PasswordInput, TextInput } from "~/components/forms";
import { useFieldErrors } from "~/hooks";
import { LoginFieldErrors } from "~/auth/schemas";
import { AuthForm } from "./auth-form";

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
    </AuthForm>
  );
};
