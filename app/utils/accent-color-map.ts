export type AccentColor = "primary" | "success" | "danger";

export const accentColorMap: Record<
  AccentColor,
  { text: string; bg: string; bgSolid: string }
> = {
  primary: {
    text: "text-primary-accent dark:text-primary-accent-dark",
    bg: "bg-primary-accent/10 dark:bg-primary-accent-dark/10",
    bgSolid: "bg-primary-accent dark:bg-primary-accent-dark",
  },
  success: {
    text: "text-success dark:text-success-dark",
    bg: "bg-success/10 dark:bg-success-dark/10",
    bgSolid: "bg-success dark:bg-success-dark",
  },
  danger: {
    text: "text-danger dark:text-danger-dark",
    bg: "bg-danger/10 dark:bg-danger-dark/10",
    bgSolid: "bg-danger dark:bg-danger-dark",
  },
};

export function getAccentColorClasses(
  color: AccentColor,
  withOpacity: boolean = true
) {
  const { text, bg, bgSolid } = accentColorMap[color];
  return {
    text,
    bg: withOpacity ? bg : bgSolid,
  };
}
