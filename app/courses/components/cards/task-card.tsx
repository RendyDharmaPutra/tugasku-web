import { FileText } from "lucide-react";
import { LeadingIcon } from "~/components/ui";

type Task = {
  title: string;
  description: string;
  deadline: string;
  status: "Selesai" | "Belum Selesai";
};

interface TaskCardProps extends Task {}

/**
 * ! TODO: Merubah icon pada LeadingIcon menjadi dinamis.
 * jika selesai maka menjadi icon checklist dengan background success,
 * jika belum selesai maka tetap background primary,
 * jika belum selesai & deadline mepet maka menjadi icon alert dengan background danger
 *
 *  */
export const TaskCard = ({
  title,
  description,
  deadline,
  status,
}: TaskCardProps) => {
  return (
    <div className="p-4 flex flex-row gap-3 rounded-xl border border-border dark:border-border-dark animate">
      <LeadingIcon
        icon={FileText}
        className="p-2 w-8 h-8"
        color={status === "Selesai" ? "success" : "primary-accent"}
      />
      <div className="flex flex-col gap-2 w-full h-fit">
        <h6 className="w-full font-medium text-base text-primary-text dark:text-primary-text-dark animate">
          {title}
        </h6>
        <p className="w-full font-normal text-sm text-tertiary-text dark:text-tertiary-text-dark animate line-clamp-2">
          {description}
        </p>
        <p className="font-normal text-sm text-secondary-text dark:text-secondary-text-dark animate">
          Deadline: {deadline}
        </p>
      </div>
    </div>
  );
};
