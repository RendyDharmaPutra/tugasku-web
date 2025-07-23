import { ActionFunctionArgs, MetaFunction, redirect } from "@remix-run/node";
import { FailureResult } from "~/utils/action-result";
import { validateForm } from "~/utils/validation";
import { LoginForm } from "~/auth/components/forms";
import { LoginSchema } from "~/auth/schemas";
import { useActionToast } from "~/hooks";
import { AuthFooter, AuthHeader, AuthLayout } from "~/auth/components/layouts";
import { loginUser } from "~/auth/services/login";

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
  const response = new Response();
  const validationResult = validateForm(await request.formData(), LoginSchema);

  if (!validationResult.success)
    return FailureResult(
      "Data yang diberikan belum valid",
      validationResult.errors
    );

  const result = await loginUser(request, response, validationResult.data);

  if (!result.success) return result;

  return redirect("/dashboard", {
    headers: response.headers,
  });
}
