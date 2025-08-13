import { FileText } from "lucide-react";
import { useMemo } from "react";
import { LeadingIcon } from "~/components/ui";
import { TaskType } from "~/types/models";
import { formatDetaofTime } from "~/utils/formatter";
import { getCountdown } from "~/utils/get-countdown";

interface TaskCardProps extends TaskType {}

export const TaskCard = ({
  title,
  description,
  deadline,
  status,
}: TaskCardProps) => {
  const isUrgent = useMemo(() => {
    const { days, hours } = getCountdown(deadline);

    return days <= 1 && hours <= 12;
  }, [deadline]);

  return (
    <div className="p-4 flex flex-row gap-3 rounded-xl border border-border dark:border-border-dark hover:bg-primary-accent/10 dark:hover:bg-primary-accent-dark/10 animate">
      <LeadingIcon
        icon={FileText}
        className="p-2 w-8 h-8"
        color={
          status === "Selesai" ? "success" : !isUrgent ? "primary" : "danger"
        }
      />

      <div className="flex flex-col gap-1 w-full h-fit">
        <h6 className="w-full font-medium text-base text-primary-text dark:text-primary-text-dark animate">
          {title}
        </h6>
        <p className="w-full font-normal text-sm text-tertiary-text dark:text-tertiary-text-dark animate line-clamp-2">
          {description ? (
            description
          ) : (
            <span className="italic">Deskripsi tidak tersedia</span>
          )}
        </p>
        <p className="mb-1 font-normal text-sm text-secondary-text dark:text-secondary-text-dark animate">
          Deadline: {formatDetaofTime(deadline)}
        </p>
      </div>
    </div>
  );
};
