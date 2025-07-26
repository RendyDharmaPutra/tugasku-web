export const VerifyContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center text-3xl font-medium text-primary-text dark:text-primary-text-dark">
        {title}
      </h2>
      <p className="text-center text-sm text-secondary-text dark:text-secondary-text-dark">
        {description}
      </p>
    </div>
  );
};
