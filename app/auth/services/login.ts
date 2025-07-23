import * as Sentry from "@sentry/remix";
import { createSupabaseServerClient } from "~/libs/supabase";
import { FailureResult, SuccessResult } from "~/utils/action-result";
import { translateSupabaseAuthError } from "./error-mapper";

/**
 * Melakukan login ke sistem Supabase Authentication.
 *
 * Fungsi ini:
 * - Melakukan request ke Supabase untuk login berdasarkan email & password
 * - Menerjemahkan error dari Supabase ke dalam bentuk user-friendly
 * - Menyisipkan session ke dalam cookie melalui Response
 * - Mengembalikan hasil Success atau Failure sesuai standar `ActionResult`
 *
 * @param request - Objek request dari Remix
 * @param response - Objek response dari Remix, akan dipakai untuk menyisipkan session
 * @param credentials - Data login yang berisi email dan password
 *
 * @example
 * const result = await loginUser(request, response, { email, password });
 * if (result.success) redirect("/dashboard");
 * else showError(result.message);
 */
export async function loginUser(
  request: Request,
  response: Response,
  credentials: {
    email: string;
    password: string;
  }
) {
  try {
    const supabase = createSupabaseServerClient({ request, response });
    const { error } = await supabase.auth.signInWithPassword(credentials);

    if (error) {
      const message = translateSupabaseAuthError(error.message);
      return FailureResult(message, null);
    }

    return SuccessResult("Login berhasil!", null);
  } catch (e) {
    console.error("Unexpected error saat login:", e);
    Sentry.captureException(e);

    return FailureResult("Terjadi kesalahan yang tidak terduga", null);
  }
}
