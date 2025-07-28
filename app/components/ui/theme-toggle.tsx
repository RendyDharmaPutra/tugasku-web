import { Moon, Sun } from "lucide-react";
import { useTheme } from "~/context";

interface ThemeToggleProps extends React.ComponentProps<"div"> {}

export const ThemeToggle = ({ ...props }: ThemeToggleProps) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div {...props}>
      <button
        onClick={toggleTheme}
        className="p-2.5 rounded-md border border-border/50 dark:border-border-dark/50 text-secondary-text dark:text-secondary-text-dark bg-primary-background dark:bg-primary-background-dark hover:bg-secondary-background dark:hover:bg-secondary-background-dark active:bg-tertiary-background dark:active:bg-tertiary-background-dark animate"
      >
        {darkMode ? (
          <Sun className="h-4 w-4 " />
        ) : (
          <Moon className="h-4 w-4 " />
        )}
      </button>
    </div>
  );
};
