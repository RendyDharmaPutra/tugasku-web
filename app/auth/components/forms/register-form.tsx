import { Mail } from "lucide-react";
import { AuthForm } from "../containers/auth-form";
import { TextInput } from "~/components/forms/text-input";
import { PasswordInput } from "~/components/forms/password-input";

export const RegisterForm = () => {
  return (
    <AuthForm label="Daftar">
      <TextInput
        label="Alamat Email"
        leading={Mail}
        id="email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <PasswordInput
        label="Password"
        id="password"
        name="password"
        placeholder="Masukkan password"
      />
      <PasswordInput
        label="Konfirmasi Password"
        id="passwordConfirmation"
        name="passwordConfirmation"
        placeholder="Masukkan password"
      />
    </AuthForm>
  );
};
