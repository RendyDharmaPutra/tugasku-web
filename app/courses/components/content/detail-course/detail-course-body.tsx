import {
  DescriptionSection,
  MaterialsSection,
  TaskListSection,
} from "./body-section";
import { ReadCourseDetailResponseData } from "~/courses/services";

interface DetailCourseBodyProps extends ReadCourseDetailResponseData {}

export const DetailCourseBody = ({
  code,
  description,
  materialCount,
  tasks,
}: DetailCourseBodyProps) => {
  return (
    <section className="flex flex-col gap-8 w-full h-fit">
      <DescriptionSection content={description} />
      <MaterialsSection materialsCount={materialCount} code={code} />
      <TaskListSection tasks={tasks} />
    </section>
  );
};
