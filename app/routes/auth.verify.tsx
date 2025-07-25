// routes/auth/verif.tsx
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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

export default function VerifPage() {
  const { success, message } = useLoaderData<typeof loader>();

  return (
    <div className="p-6 text-center">
      <h1
        className={`text-2xl font-bold ${
          success ? "text-green-600" : "text-red-600"
        }`}
      >
        {message}
      </h1>
    </div>
  );
}
