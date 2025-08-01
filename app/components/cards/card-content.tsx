interface CardContentProps {
  title: string;
  description: string;
}

export const CardContent = (props: CardContentProps) => {
  return (
    <section className="flex flex-col justify-center gap-1.5 w-full h-full">
      <h6 className="font-semibold text-base text-primary-text dark:text-primary-text-dark animate">
        {props.title}
      </h6>
      <p className="font-medium text-sm text-tertiary-text dark:text-tertiary-text-dark animate">
        {props.description}
      </p>
    </section>
  );
};
