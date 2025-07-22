import { Mail } from "lucide-react";
import { PasswordInput, TextInput } from "~/components/forms";
import { useFieldErrors } from "~/hooks";
import { AuthForm } from "../containers";
import { RegisterFieldErrors } from "~/auth/schemas";

export const RegisterForm = () => {
  const { email, password, confirmPassword } =
    useFieldErrors<RegisterFieldErrors>();

  return (
    <AuthForm label="Daftar">
      <TextInput
        label="Alamat Email"
        leading={Mail}
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
      <PasswordInput
        label="Konfirmasi Password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Masukkan password"
        message={confirmPassword}
      />
    </AuthForm>
  );
};
