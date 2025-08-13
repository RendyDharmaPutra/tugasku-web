import { FileText } from "lucide-react";
import { BodySectionContainer } from "./body-section-container";
import { BodySectionHeader } from "./body-section-header";
import { TaskType } from "~/types/models";
import { FeedbackState } from "~/components/boundary";
import { TaskCard } from "../cards";

interface TaskListSectionProps {
  tasks: TaskType[];
}

export const TaskListSection = ({ tasks }: TaskListSectionProps) => {
  return (
    <BodySectionContainer className="gap-3 h-full">
      <BodySectionHeader icon={FileText} title="Daftar Tugas" />
      {tasks.length >= 1 ? (
        <div className="flex flex-col gap-2.5 w-full">
          {tasks.map((task, idx) => (
            <TaskCard key={idx} {...task} />
          ))}
        </div>
      ) : (
        <FeedbackState
          icon={FileText}
          title=" Belum ada tugas yang tersedia"
          description="Tambahkan tugas untuk mulai mengatur dan memaksimalkan
              pembelajaran di kursus ini."
          color="primary"
        />
      )}
    </BodySectionContainer>
  );
};
