import { PasswordField, TextField } from "~/components/forms";
import { useFieldErrors } from "~/hooks";
import { RegisterFieldErrors } from "~/auth/schemas";
import { AuthForm } from "./auth-form";

export const RegisterForm = () => {
  const { email, password, confirmPassword } =
    useFieldErrors<RegisterFieldErrors>();

  return (
    <AuthForm label="Daftar">
      <TextField
        label="Alamat Email"
        id="email"
        name="email"
        type="email"
        placeholder="example@mail.com"
        message={email}
      />
      <PasswordField
        label="Password"
        id="password"
        name="password"
        placeholder="Masukkan password"
        message={password}
      />
      <PasswordField
        label="Konfirmasi Password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Masukkan password"
        message={confirmPassword}
      />
    </AuthForm>
  );
};
