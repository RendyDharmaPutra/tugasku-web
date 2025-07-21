import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { RegisterForm } from "~/auth/components/forms/register-form";
import { AuthLayout } from "~/auth/components/layouts/auth-layout";
import { RegisterSchema } from "~/auth/schemas/register-schema";
import { FailureResult, SuccessResult } from "~/libs/action-result";
import { validateForm } from "~/libs/validation";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Register" }];
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const validationResult = validateForm(
    await request.formData(),
    RegisterSchema
  );

  if (!validationResult.success)
    return FailureResult(
      "Data yang diberikan belum valid",
      validationResult.errors
    );

  return SuccessResult("Berhasil mendaftarkan pengguna", null);
}
