import { createBrowserClient } from "@supabase/auth-helpers-remix";

export const supabase = createBrowserClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);
