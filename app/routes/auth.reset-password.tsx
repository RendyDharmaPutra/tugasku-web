import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { FailureResult } from "~/utils/action-result";
import { validateForm } from "~/utils/validation";
import { ResetPasswordSchema } from "~/auth/schemas";
import { useActionToast } from "~/hooks";
import { AuthFooter, AuthHeader, AuthLayout } from "~/auth/components/layouts";
import { ResetPasswordForm } from "~/auth/components/forms";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu | Reset Password" }];
};

export default function LoginPage() {
  useActionToast("mereset password pengguna");

  return (
    <AuthLayout>
      <AuthHeader
        title="Reset password anda"
        description="Masukkan password baru kamu di bawah"
      />
      <ResetPasswordForm />
      <AuthFooter
        route="register"
        label="Belum punya akun?"
        highlight="Daftar di sini"
      />
    </AuthLayout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const validationResult = validateForm(
    await request.formData(),
    ResetPasswordSchema
  );

  if (!validationResult.success)
    return FailureResult(
      "Data yang diberikan belum valid",
      validationResult.errors
    );

  // TODO: Implement password reset logic here
  // Example:
  // const { password } = validationResult.data;
  // await resetUserPassword(userId, password);

  return { success: true, message: "Password berhasil direset." };
}
