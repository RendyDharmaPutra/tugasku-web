// routes/auth/verif.tsx
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { AuthLayout } from "~/auth/components/layouts";
import { VerifyEmail } from "~/auth/components/verify/verify-email";
import { createSupabaseServerClient } from "~/libs/supabase";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return json({
      success: false,
      message: "Kode verifikasi tidak ditemukan.",
    });
  }

  const response = new Response(); // dibutuhkan oleh supabase client
  const supabase = createSupabaseServerClient({ request, response });

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return json(
      { success: false, message: `Verifikasi gagal: ${error.message}` },
      { headers: response.headers } // perlu tetap menyertakan headers jika ada perubahan cookie
    );
  }

  return json(
    { success: true, message: "Verifikasi berhasil!" },
    { headers: response.headers }
  );
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
