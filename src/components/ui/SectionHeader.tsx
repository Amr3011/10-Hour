type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1
        className="text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ color: "var(--page-text)" }}
      >
        {title}
      </h1>
      <p
        className="text-sm font-medium sm:text-base"
        style={{ color: "var(--muted-text)" }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
