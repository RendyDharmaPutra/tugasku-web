import { BookOpen } from "lucide-react";
import { BodySectionContainer } from "./body-section-container";
import { BodySectionHeader } from "./body-section-header";

interface DescriptionSectionProps {
  content?: string;
}

export const DescriptionSection = ({ content }: DescriptionSectionProps) => {
  return (
    <BodySectionContainer>
      <BodySectionHeader icon={BookOpen} title="Deskripsi" />
      <div className="w-full h-fit">
        <p className="w-full font-normal text-base text-secondary-text dark:text-secondary-text-dark animate">
          {content ? (
            content
          ) : (
            <span className="italic">Deskripsi tidak tersedia</span>
          )}
        </p>
      </div>
    </BodySectionContainer>
  );
};
