import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { FailureResult } from "~/utils/action-result";
import { validateForm } from "~/utils/validation";
import { LoginForm } from "~/auth/components/forms";
import { LoginSchema } from "~/auth/schemas";
import { useActionToast } from "~/hooks";
import { registerUser } from "~/auth/services";
import { AuthFooter, AuthHeader, AuthLayout } from "~/auth/components/layouts";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Login" }];
};

export default function LoginPage() {
  useActionToast("mengautentikasi pengguna");

  return (
    <AuthLayout>
      <AuthHeader
        title="Masuk ke akun anda"
        description="Silahkan bergabung dengan kami hari ini"
      />
      <LoginForm />
      <AuthFooter
        route="register"
        label="Belum punya akun?"
        highlight="Daftar di sini"
      />
    </AuthLayout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const validationResult = validateForm(await request.formData(), LoginSchema);

  if (!validationResult.success)
    return FailureResult(
      "Data yang diberikan belum valid",
      validationResult.errors
    );

  return registerUser(validationResult.data);
}
