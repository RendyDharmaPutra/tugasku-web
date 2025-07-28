// routes/auth/verif.tsx
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { AuthLayout } from "~/auth/components/layouts";
import { VerifyEmail } from "~/auth/components/verify";
import { verify } from "~/auth/services";
import { FailureResult } from "~/utils/action-result";
import { getQueryParams } from "~/utils/request";

export async function loader({ request }: LoaderFunctionArgs) {
  const queryParams = getQueryParams(request);
  const code = queryParams.get("code");

  if (!code) {
    // harus bungkus dengan json()
    return json(FailureResult("Kode verifikasi tidak ditemukan.", null));
  }

  const response = new Response(); // dibutuhkan oleh supabase client
  return verify(request, response, code); // verify harus mengembalikan Response
}

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu | Verifikasi Email" }];
};

export default function VerifyPage() {
  return (
    <AuthLayout>
      <VerifyEmail />
    </AuthLayout>
  );
}
