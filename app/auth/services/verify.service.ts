import * as Sentry from "@sentry/remix";
import { json } from "@remix-run/node";
import {
  createSupabaseServerClient,
  translateSupabaseAuthError,
} from "~/libs/supabase";
import { FailureResult, SuccessResult } from "~/utils/action-result";

export async function verify(
  request: Request,
  response: Response,
  code: string
): Promise<Response> {
  try {
    const supabase = createSupabaseServerClient({ request, response });
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      const message = translateSupabaseAuthError(error.message);
      console.error(`Error verifikasi : ${message}`);

      return json(FailureResult("Gagal memverifikasi email.", null), {
        headers: response.headers,
      });
    }

    return json(SuccessResult("Berhasil memverifikasi email!", null), {
      headers: response.headers,
    });
  } catch (e) {
    console.error("Unexpected error saat login:", e);
    Sentry.captureException(e);

    return json(FailureResult("Terjadi kesalahan yang tidak terduga", null), {
      headers: response.headers,
    });
  }
}
