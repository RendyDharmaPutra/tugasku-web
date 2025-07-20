import { MetaFunction } from "@remix-run/node";
import { RegisterForm } from "~/auth/components/forms/register-form";
import { AuthLayout } from "~/auth/components/layouts/auth-layout";

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
