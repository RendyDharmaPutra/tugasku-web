import * as Sentry from "@sentry/remix";
import { createSupabaseServerClient } from "~/libs/supabase";
import { FailureResult, SuccessResult } from "~/utils/action-result";
import { translateSupabaseAuthError } from "./error-mapper";

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
        redirectTo: "https://tugasku-web.vercel.app/",
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
