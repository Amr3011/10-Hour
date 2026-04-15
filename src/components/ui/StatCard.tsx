type StatCardProps = {
  label: string;
  value: string;
  tone?: "primary" | "warning" | "success";
  className?: string;
};

type ToneStyle = {
  borderColor: string;
  background: string;
};

const toneStyles: Record<NonNullable<StatCardProps["tone"]>, ToneStyle> = {
  primary: {
    borderColor: "var(--tone-primary-border)",
    background: "var(--tone-primary-bg)",
  },
  warning: {
    borderColor: "var(--tone-warning-border)",
    background: "var(--tone-warning-bg)",
  },
  success: {
    borderColor: "var(--tone-success-border)",
    background: "var(--tone-success-bg)",
  },
};

const StatCard = ({
  label,
  value,
  tone = "primary",
  className,
}: StatCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between gap-2 rounded-2xl border p-4 shadow-sm backdrop-blur ${
        className ?? ""
      }`}
      style={{
        minHeight: "132px",
        borderColor: toneStyles[tone].borderColor,
        background: toneStyles[tone].background,
        color: "var(--page-text)",
      }}
    >
      <span
        className="text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--muted-text)" }}
      >
        {label}
      </span>
      <span
        className="text-xl font-bold leading-tight sm:text-2xl"
        style={{ color: "var(--page-text)" }}
      >
        {value}
      </span>
    </div>
  );
};

export default StatCard;
