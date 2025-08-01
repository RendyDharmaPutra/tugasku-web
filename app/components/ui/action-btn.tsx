import React from "react";

interface ActionBtnProps extends React.ComponentProps<"button"> {}

export const ActionBtn = ({
  children,
  className,
  ...props
}: ActionBtnProps) => {
  return (
    <button
      className={`${className} rounded-xl bg-primary-accent dark:bg-primary-accent-dark hover:bg-secondary-accent dark:hover:bg-secondary-accent-dark animate`}
      {...props}
    >
      {children}
    </button>
  );
};
