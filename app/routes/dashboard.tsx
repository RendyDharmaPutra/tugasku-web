import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createSupabaseServerClient } from "~/libs/supabase";
import { requireUserSession } from "~/utils/auth-session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = new Response();
  const supabase = createSupabaseServerClient({ request, response });

  const user = await requireUserSession(supabase);

  return json(
    {
      user,
    },
    {
      headers: response.headers,
    }
  );
}

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu | Dashboard" }];
};

export default function DashboardPage() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Selamat datang, {user.email}</h1>
    </div>
  );
}
