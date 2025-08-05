import { TextField } from "~/components/forms";
import { useFieldErrors } from "~/hooks";
import { AuthForm } from "./auth-form";
import { ForgotPasswordFieldErrors } from "~/auth/schemas";

export const ForgotPasswordForm = () => {
  const { email } = useFieldErrors<ForgotPasswordFieldErrors>();

  return (
    <AuthForm label="Kirim">
      <TextField
        label="Alamat Email"
        id="email"
        name="email"
        type="email"
        placeholder="example@mail.com"
        message={email}
      />
    </AuthForm>
  );
};
