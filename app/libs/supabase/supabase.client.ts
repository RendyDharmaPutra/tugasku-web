import { createBrowserClient } from "@supabase/auth-helpers-remix";
import { env } from "~/config/env";

export const supabase = createBrowserClient(env.SUPABASE_URL, env.SUPABASE_KEY);
