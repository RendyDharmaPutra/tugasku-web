import { PasswordInput } from "~/components/forms/fields";
import { useFieldErrors } from "~/hooks";
import { ResetPasswordFieldErrors } from "~/auth/schemas";
import { AuthForm } from "./auth-form";

export const ResetPasswordForm = () => {
  const { password, confirmPassword } =
    useFieldErrors<ResetPasswordFieldErrors>();

  return (
    <AuthForm label="Reset Password">
      <PasswordInput
        label="Password Baru"
        id="password"
        name="password"
        placeholder="Masukkan password baru"
        message={password}
      />
      <PasswordInput
        label="Konfirmasi Password Baru"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Konfirmasi password baru"
        message={confirmPassword}
      />
    </AuthForm>
  );
};
