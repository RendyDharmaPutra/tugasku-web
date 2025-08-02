import { LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { json, Outlet, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CoursePlaceholder } from "~/courses/components/content";
import { CoursesSidebar } from "~/courses/components/sidebar";
import { readCoursesList } from "~/courses/services";
import { createSupabaseServerClient } from "~/libs/supabase";
import { requireUserSession } from "~/utils/auth-session.server";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Daftar Kursus" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const response = new Response();
  const supabase = createSupabaseServerClient({ request, response });

  const user = await requireUserSession(supabase);
  const coursesData = await readCoursesList(supabase, user);

  return json(
    {
      user,
      coursesData,
    },
    {
      headers: response.headers,
    }
  );
}

export default function CoursesPage() {
  const [hydrated, setHydrated] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { pathname } = useLocation();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Hindari rendering di awal sebelum client mounting
    return null;
  }

  return (
    <main className="flex flex-row w-full h-screen ">
      {isDesktop ? (
        <>
          <CoursesSidebar />
          {pathname === "/courses" ? <CoursePlaceholder /> : <Outlet />}
        </>
      ) : pathname === "/courses" ? (
        <CoursesSidebar />
      ) : (
        <Outlet />
      )}
    </main>
  );
}
