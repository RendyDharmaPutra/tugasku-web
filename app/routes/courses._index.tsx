import { type MetaFunction } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";
import { useMediaQuery } from "react-responsive";
import { CoursePlaceholder } from "~/courses/components/content";
import { CoursesSidebar } from "~/courses/components/sidebar";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Daftar Kursus" }];
};

export async function loader() {
  return null;
}

export default function CoursesPage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { pathname } = useLocation();

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
