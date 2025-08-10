import { AccentColor, getAccentColorClasses } from "~/utils/accent-color-map";

interface BadgeProps {
  title: string;
  color: AccentColor;
}

export const Badge = ({ title, color }: BadgeProps) => {
  const { text, bg } = getAccentColorClasses(color);

  return (
    <div
      className={`px-2 py-0.5 flex justify-center items-center w-fit h-fit rounded-full font-normal text-sm ${text} ${bg} animate`}
    >
      {title}
    </div>
  );
};
