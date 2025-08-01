import { CoursesSidebardContent } from "./content";
import { CoursesSidebarHeader } from "./courses-sidebar-header";

export const CoursesSidebar = () => {
  return (
    <aside className="flex flex-col w-full lg:max-w-[430px] h-full border-r border-border/20 dark:border-border-dark/20 bg-primary-background dark:bg-primary-background-dark animate">
      <CoursesSidebarHeader />
      <CoursesSidebardContent />
    </aside>
  );
};
