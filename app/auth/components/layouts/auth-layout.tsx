import { ThemeToggle } from "~/components/ui";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative px-4 xl:px-8 py-12 flex justify-center items-center w-full h-screen bg-primary-background dark:bg-primary-background-dark animate">
      <div className="flex flex-col gap-8 justify-center w-full max-w-md h-full ">
        {children}
        <ThemeToggle className="absolute top-3 right-3 " />
      </div>
    </div>
  );
};
