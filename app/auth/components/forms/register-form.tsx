import { Mail } from "lucide-react";
import { AuthForm } from "../containers/auth-form";
import { TextInput } from "~/components/forms/text-input";
import { PasswordInput } from "~/components/forms/password-input";
import { useActionData } from "@remix-run/react";
import { RegisterActionResult } from "~/auth/types/register-action-result";
import { RegisterFieldErrors } from "~/auth/schemas/register-schema";
import { extractFieldErrors } from "~/libs/validation";

export const RegisterForm = () => {
  const actionData = useActionData<RegisterActionResult>();

  const { email, password, confirmPassword } =
    extractFieldErrors<RegisterFieldErrors>(actionData ?? { success: true });

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
