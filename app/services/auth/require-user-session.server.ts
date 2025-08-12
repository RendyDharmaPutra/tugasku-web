import { redirect } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { SupabaseClient } from "@supabase/supabase-js";
import { getAuthUser } from "./get-auth-user.server";

export async function requireUserSession(supabase: SupabaseClient) {
  try {
    // Jika error, pasti ditangkap sebagai Error, dan redirect ke login
    await getAuthUser(supabase);
  } catch (e) {
    console.error(e);
    Sentry.captureException(e);

    throw redirect("/auth/login"); // atau redirect ke /error jika kamu punya
  }
}
