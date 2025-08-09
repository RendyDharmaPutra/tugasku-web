import { Link2, SquareArrowOutUpRight } from "lucide-react";
import { BodySectionContainer } from "./body-section-container";
import { BodySectionHeader } from "./body-section-header";
import { Link } from "@remix-run/react";

interface MaterialsSectionProps {
  code: string;
  materialsCount: number;
}

export const MaterialsSection = ({
  code,
  materialsCount,
}: MaterialsSectionProps) => {
  return (
    <BodySectionContainer>
      <BodySectionHeader icon={Link2} title="Materi Kursus">
        <Link
          to={`/courses/${code}/materials`}
          className="px-3 py-2 flex flex-row items-center gap-2 font-normal text-base text-primary-accent dark:text-primary-accent-dark rounded-xl border border-primary-accent dark:border-primary-accent-dark hover:bg-primary-accent/10 dark:hover:bg-primary-accent-dark/10 animate"
        >
          Lihat Semua <SquareArrowOutUpRight className="w-4 h-4" />
        </Link>
      </BodySectionHeader>
      <div className="w-full h-fit">
        <p className="font-normal text-base text-secondary-text dark:text-secondary-text-dark animate">
          {materialsCount >= 1
            ? `${materialsCount} materi yang tersedia pada kursus ini`
            : "Belum ada materi yang tersedia"}
        </p>
      </div>
    </BodySectionContainer>
  );
};
