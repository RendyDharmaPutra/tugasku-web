type SubmitBtnProps = React.ComponentProps<"button"> & {
  label: string;
};

export const SubmitBtn = ({ label, ...props }: SubmitBtnProps) => {
  return (
    <button
      type="submit"
      className="px-4 py-2 flex justify-center items-center w-full h-fit rounded-xl bg-primary-accent dark:bg-primary-accent-dark border border-secondary-accent dark:border-secondary-accent-dark hover:bg-secondary-accent dark:hover:bg-secondary-accent-dark active:bg-primary-accent dark:active:bg-primary-accent-dark text-primary-background animate"
      {...props}
    >
      {label}
    </button>
  );
};
