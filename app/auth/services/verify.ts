import { createSupabaseServerClient } from "~/libs/supabase";
import * as Sentry from "@sentry/remix";
import { FailureResult, SuccessResult } from "~/utils/action-result";
import { json } from "@remix-run/node";
import { translateSupabaseAuthError } from "./error-mapper";

export async function verify(
  request: Request,
  response: Response,
  code: string
) {
  try {
    const supabase = createSupabaseServerClient({ request, response });
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      const message = translateSupabaseAuthError(error.message);
      console.error(`Error verifikasi : ${message}`);

      return json(
        FailureResult("Gagal memverifikasi email.", null),
        { headers: response.headers } // perlu tetap menyertakan headers jika ada perubahan cookie
      );
    }

    return json(SuccessResult("Berhasil memverifikasi email!", null), {
      headers: response.headers,
    });
  } catch (e) {
    console.error("Unexpected error saat login:", e);
    Sentry.captureException(e);

    return FailureResult("Terjadi kesalahan yang tidak terduga", null);
  }
}
