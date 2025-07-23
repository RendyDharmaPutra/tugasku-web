import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createSupabaseServerClient } from "~/libs/supabase";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = new Response();
  const supabase = createSupabaseServerClient({ request, response });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login", { headers: response.headers });
  }

  return json(
    {
      user,
    },
    {
      headers: response.headers,
    }
  );
}

export default function DashboardPage() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Selamat datang, {user.email}</h1>
    </div>
  );
}
