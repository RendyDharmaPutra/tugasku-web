import { createServerClient } from "@supabase/auth-helpers-remix";
import { env } from "~/config/env";

export const createSupabaseServerClient = ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => {
  return createServerClient(env.SUPABASE_URL, env.SUPABASE_KEY, {
    request,
    response,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });
};
