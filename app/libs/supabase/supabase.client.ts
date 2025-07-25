import { createBrowserClient } from "@supabase/auth-helpers-remix";

export const supabase = createBrowserClient(
  process.env.PUBLIC_SUPABASE_URL!,
  process.env.PUBLIC_SUPABASE_ANON_KEY!
);
