import { FileText } from "lucide-react";
import { BodySectionContainer } from "./body-section-container";
import { BodySectionHeader } from "./body-section-header";
import { TaskCard } from "~/courses/components/cards";
import { TaskType } from "~/types/models";

interface TaskListSectionProps {
  tasks: TaskType[];
}

export const TaskListSection = ({ tasks }: TaskListSectionProps) => {
  return (
    <BodySectionContainer className="gap-3">
      <BodySectionHeader icon={FileText} title="Daftar Tugas" />
      <div className="flex flex-col gap-2.5 w-full">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} {...task} />
        ))}
      </div>
    </BodySectionContainer>
  );
};
