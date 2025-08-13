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
        <Link to={`/courses/${code}/materials`} className="inline-btn gap-2">
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
