import { PasswordField } from "~/components/forms";
import { useFieldErrors } from "~/hooks";
import { ResetPasswordFieldErrors } from "~/auth/schemas";
import { AuthForm } from "./auth-form";

export const ResetPasswordForm = () => {
  const { password, confirmPassword } =
    useFieldErrors<ResetPasswordFieldErrors>();

  return (
    <AuthForm label="Reset Password">
      <PasswordField
        label="Password Baru"
        id="password"
        name="password"
        placeholder="Masukkan password baru"
        message={password}
      />
      <PasswordField
        label="Konfirmasi Password Baru"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Konfirmasi password baru"
        message={confirmPassword}
      />
    </AuthForm>
  );
};
