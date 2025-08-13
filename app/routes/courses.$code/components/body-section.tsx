import { DescriptionSection, MaterialsSection, TaskListSection } from "./body";
import { ReadCourseDetailResponseData } from "~/courses/services";

interface BodySectionProps extends ReadCourseDetailResponseData {}

export const BodySection = ({
  code,
  description,
  materialCount,
  tasks,
}: BodySectionProps) => {
  return (
    <section className="flex flex-col gap-8 w-full h-fit">
      <DescriptionSection content={description} />
      <MaterialsSection materialsCount={materialCount} code={code} />
      <TaskListSection tasks={tasks} />
    </section>
  );
};
