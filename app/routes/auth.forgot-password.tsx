import { ActionFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { ForgotPasswordForm } from "~/auth/components/forms/forgot-password-form";
import { AuthFooter, AuthHeader, AuthLayout } from "~/auth/components/layouts";
import { ForgotPasswordSchema } from "~/auth/schemas/forgot-password-schema";
import { forgotPasswordUser } from "~/auth/services";
import { useActionToast } from "~/hooks";
import { FailureResult } from "~/utils/action-result";
import { validateForm } from "~/utils/validation";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu | Lupa password" }];
};

export default function ForgotPasswordPage() {
  useActionToast("mengirim reset password");

  return (
    <AuthLayout>
      <AuthHeader
        title="Lupa password kamu?"
        description="Jangan khawatir! Masukkan alamat email kamu dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi kamu."
      />
      <ForgotPasswordForm />
      <AuthFooter
        route="register"
        label="Belum punya akun?"
        highlight="Daftar di sini"
      />
    </AuthLayout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const response = new Response();

  const validationResult = validateForm(
    await request.formData(),
    ForgotPasswordSchema
  );

  if (!validationResult.success)
    return FailureResult(
      "Data yang diberikan belum valid",
      validationResult.errors
    );

  const result = await forgotPasswordUser(
    request,
    response,
    validationResult.data
  );

  return json(result, {
    headers: response.headers,
  });
}
