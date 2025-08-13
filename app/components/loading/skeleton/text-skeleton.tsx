interface TextSkeletonProps {
  className?: string;
}

export const TextSkeleton = ({ className = "w-full" }: TextSkeletonProps) => {
  return (
    <span
      className={`${className} h-2.5 rounded-xl bg-secondary-text dark:bg-secondary-text-dark animate animate-pulse`}
    ></span>
  );
};
