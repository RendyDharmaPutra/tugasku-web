import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { FailureResult, SuccessResult } from "~/utils/action-result";
import { validateForm } from "~/utils/validation";
import { supabase } from "~/libs/supabase";
import { AuthLayout } from "~/auth/components/layouts/auth-layout";
import { RegisterForm } from "~/auth/components/forms";
import { RegisterSchema } from "~/auth/schemas";

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

  const { data, error } = await supabase.auth.signUp({
    email: validationResult.data.email,
    password: validationResult.data.password,
  });

  console.log(data);
  console.log(error);

  return SuccessResult("Berhasil mendaftarkan pengguna", null);
}
