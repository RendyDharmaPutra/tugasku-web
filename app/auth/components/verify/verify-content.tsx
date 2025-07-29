export const VerifyContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h6 className="w-full text-center font-medium text-2xl md:text-3xl text-primary-text dark:text-primary-text-dark animate">
        {title}
      </h6>
      <p className="w-full text-center font-normal text-sm text-secondary-text dark:text-secondary-text-dark animate">
        {description}
      </p>
    </div>
  );
};
