import React from "react";

interface ActionBtnProps extends React.ComponentProps<"button"> {}

export const ActionBtn = ({
  children,
  className,
  ...props
}: ActionBtnProps) => {
  return (
    <button
      className={`${className} rounded-xl primary-btn-color animate`}
      {...props}
    >
      {children}
    </button>
  );
};
