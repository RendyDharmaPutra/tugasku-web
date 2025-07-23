import { ActionFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { FailureResult } from "~/utils/action-result";
import { validateForm } from "~/utils/validation";
import { RegisterForm } from "~/auth/components/forms";
import { RegisterSchema } from "~/auth/schemas";
import { useActionToast } from "~/hooks";
import { registerUser } from "~/auth/services";
import { AuthFooter, AuthHeader, AuthLayout } from "~/auth/components/layouts";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Register" }];
};

export default function RegisterPage() {
  useActionToast("mendaftarkan pengguna");

  return (
    <AuthLayout>
      <AuthHeader
        title="Buat akun anda"
        description="Silahkan bergabung dengan kami hari ini"
      />
      <RegisterForm />
      <AuthFooter
        route="login"
        label="Sudah punya akun?"
        highlight="Login di sini"
      />
    </AuthLayout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const response = new Response();

  const validationResult = validateForm(
    await request.formData(),
    RegisterSchema
  );

  if (!validationResult.success)
    return FailureResult(
      "Data yang diberikan belum valid",
      validationResult.errors
    );

  const result = await registerUser(request, response, validationResult.data);

  return json(result, {
    headers: response.headers, // ← hanya di sini kamu perlu headers
  });
}
