type ResultCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const ResultCard = ({ title, description, children }: ResultCardProps) => {
  return (
    <div
      className="rounded-3xl border p-6 backdrop-blur"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
        boxShadow: "0 24px 60px var(--card-shadow)",
        color: "var(--page-text)",
      }}
    >
      <div className="flex flex-col gap-2">
        <h2
          className="text-lg font-semibold"
          style={{ color: "var(--page-text)" }}
        >
          {title}
        </h2>
        <p className="text-sm" style={{ color: "var(--muted-text)" }}>
          {description}
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default ResultCard;
