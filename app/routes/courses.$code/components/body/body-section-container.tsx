import React from "react";

interface BodySectionContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const BodySectionContainer = ({
  className,
  children,
}: BodySectionContainerProps) => {
  return (
    <section
      className={`flex flex-col items-center ${
        className ? className : "gap-2"
      } w-full h-fit`}
    >
      {children}
    </section>
  );
};
