import { CoursesSidebardContent } from "./content";
import { CoursesSidebarHeader } from "./courses-sidebar-header";

export const CoursesSidebar = () => {
  return (
    <aside className="flex flex-col w-full lg:max-w-[430px] h-full border-r border-border dark:border-border-dark bg-primary-background dark:bg-primary-background-dark animate">
      <CoursesSidebarHeader />
      <CoursesSidebardContent />
    </aside>
  );
};
