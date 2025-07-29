export const VerifyContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full h-fit text-center">
      {children}
    </div>
  );
};
