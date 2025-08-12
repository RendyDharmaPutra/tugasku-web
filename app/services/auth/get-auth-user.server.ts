import * as Sentry from "@sentry/remix";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getAuthUser(supabase: SupabaseClient) {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) throw new Error(`Gagal mengambil data User: ${error.message}`);
    if (!user) throw new Error("User tidak ditemukan");

    return user;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);

    throw new Error(`Gagal mengambil data User: ${error}`);
  }
}
