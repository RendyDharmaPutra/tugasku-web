import * as Sentry from "@sentry/remix";
import {
  createSupabaseServerClient,
  translateSupabaseAuthError,
} from "~/libs/supabase";
import { FailureResult, SuccessResult } from "~/utils/action-result";

/**
 * Mengirim permintaan reset password ke email pengguna melalui Supabase.
 *
 * Fungsi ini akan mencoba mengirimkan email reset password menggunakan Supabase.
 * Jika terjadi error dari Supabase, maka error tersebut akan diterjemahkan
 * menggunakan `translateSupabaseAuthError` sebelum dikembalikan.
 * Jika terjadi error tak terduga (exception), error akan dikirim ke Sentry
 * dan pesan umum akan dikembalikan.
 *
 * @param request - Objek Request dari action loader Remix, dibutuhkan oleh Supabase server client.
 * @param response - Objek Response dari action loader Remix, dibutuhkan oleh Supabase server client.
 * @param credentials - Objek yang berisi alamat email pengguna yang ingin reset password.
 * @param credentials.email - Alamat email pengguna.
 *
 * @returns Promise dari `SuccessResult` atau `FailureResult`:
 * - Jika berhasil, akan mengembalikan pesan sukses generik (tanpa membocorkan apakah email terdaftar).
 * - Jika gagal karena error Supabase, akan mengembalikan pesan kegagalan terjemahan.
 * - Jika gagal karena exception lain, akan mengembalikan pesan gagal umum dan melaporkan ke Sentry.
 *
 * @example
 * const result = await forgotPasswordUser(request, response, { email: "user@example.com" });
 * if (result.ok) {
 *   // tampilkan pesan sukses
 * } else {
 *   // tampilkan pesan error dari result.message
 * }
 */
export async function forgotPasswordUser(
  request: Request,
  response: Response,
  credentials: {
    email: string;
  }
) {
  try {
    const supabase = createSupabaseServerClient({ request, response });
    const { error } = await supabase.auth.resetPasswordForEmail(
      credentials.email,
      {
        redirectTo: "https://tugasku-web.vercel.app/reset-password",
      }
    );

    if (error) {
      const message = translateSupabaseAuthError(error.message);
      return FailureResult(message, null);
    }

    return SuccessResult(
      "Jika email Anda terdaftar, tautan reset password telah dikirim",
      null
    );
  } catch (e) {
    console.error("Unexpected error saat login:", e);
    Sentry.captureException(e);

    return FailureResult("Terjadi kesalahan yang tidak terduga", null);
  }
}
