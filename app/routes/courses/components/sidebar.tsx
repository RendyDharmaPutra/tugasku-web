import { useState } from "react";
import { SidebarContent } from "./content";
import { SidebarHeader } from "./header/sidebar-header";

export const Sidebar = () => {
  const [courseQuery, setCourseQuery] = useState("");

  return (
    <aside className="flex flex-col w-full lg:max-w-[430px] h-full border-r border-border dark:border-border-dark bg-primary-background dark:bg-primary-background-dark animate">
      <SidebarHeader query={courseQuery} setQuery={setCourseQuery} />
      <SidebarContent query={courseQuery} />
    </aside>
  );
};
