import * as Sentry from "@sentry/remix";
import {
  createSupabaseServerClient,
  translateSupabaseAuthError,
} from "~/libs/supabase";
import { FailureResult, SuccessResult } from "~/utils/action-result";

/**
 * Mendaftarkan akun user ke sistem Supabase Authentication.
 *
 * Fungsi ini:
 * - Melakukan request ke Supabase untuk membuat akun berdasarkan email & password
 * - Menerjemahkan error dari Supabase ke dalam bentuk user-friendly
 * - Melaporkan error tidak terduga ke Sentry
 * - Mengembalikan hasil Success atau Failure sesuai standar `ActionResult`
 *
 * @param userData - Data akun yang berisi `email` dan `password`
 * @returns Promise<ActionResult<null>>
 *
 * @example
 * const result = await registerUser({ email: "user@email.com", password: "abc123" });
 * if (result.success) {
 *   // Berhasil, bisa redirect atau tampilkan toast
 * } else {
 *   // Gagal, tampilkan pesan kesalahan
 * }
 */
export async function registerUser(
  request: Request,
  response: Response,
  credentials: {
    email: string;
    password: string;
  }
) {
  try {
    const supabase = createSupabaseServerClient({ request, response });
    const { error } = await supabase.auth.signUp({
      ...credentials,
      options: {
        emailRedirectTo: "https://tugasku-web.vercel.app/auth/verify",
      },
    });

    if (error) {
      const message = translateSupabaseAuthError(error.message);
      return FailureResult(message, null);
    }

    return SuccessResult(
      "Silakan periksa email Anda untuk memverifikasi akun.",
      null
    );
  } catch (e) {
    console.error("Unexpected error saat sign up:", e);
    Sentry.captureException(e);

    return FailureResult("Terjadi kesalahan yang tidak terduga", null);
  }
}
