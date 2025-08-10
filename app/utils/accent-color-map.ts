export type AccentColor = "primary" | "success" | "danger";

export const accntColorMap: Record<AccentColor, { text: string; bg: string }> =
  {
    primary: {
      text: "text-primary-accent dark:text-primary-accent-dark",
      bg: "bg-primary-accent/10 dark:bg-primary-accent-dark/10",
    },
    success: {
      text: "text-success dark:text-success-dark",
      bg: "bg-success/10 dark:bg-success-dark/10",
    },
    danger: {
      text: "text-danger dark:text-danger-dark",
      bg: "bg-danger/10 dark:bg-danger-dark/10",
    },
  };

export function getAccentColorClasses(color: AccentColor) {
  return accntColorMap[color];
}
