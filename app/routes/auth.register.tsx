import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { FailureResult } from "~/utils/action-result";
import { validateForm } from "~/utils/validation";
import { AuthLayout } from "~/auth/components/layouts/auth-layout";
import { RegisterForm } from "~/auth/components/forms";
import { RegisterSchema } from "~/auth/schemas";
import { useActionToast } from "~/hooks";
import { registerUser } from "~/auth/services";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Register" }];
};

export default function RegisterPage() {
  useActionToast("mendaftarkan pengguna");

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

  return registerUser(validationResult.data);
}
