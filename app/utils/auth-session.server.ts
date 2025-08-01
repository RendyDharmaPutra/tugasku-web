import { redirect } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { SupabaseClient } from "@supabase/supabase-js";

export async function requireUserSession(supabase: SupabaseClient) {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      throw new Error(`Gagal mengambil data User : ${error.message}`);
    }

    if (!user) {
      throw redirect("/auth/login");
    }

    return user;
  } catch (e) {
    console.error(e);
    Sentry.captureException(e);

    throw redirect("/auth/login"); // atau redirect ke /error jika kamu punya
  }
}
