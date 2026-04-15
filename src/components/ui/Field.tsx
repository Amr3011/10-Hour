type FieldProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  as?: "input" | "textarea";
  rows?: number;
};

const Field = ({
  label,
  placeholder,
  value,
  onChange,
  as = "input",
  rows = 4,
}: FieldProps) => {
  const Component = as === "textarea" ? "textarea" : "input";

  return (
    <label className="flex flex-col gap-2 text-sm text-[var(--page-text)]">
      <span className="font-semibold tracking-tight">{label}</span>
      <Component
        className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--field-bg)] px-4 py-3 text-sm text-[var(--field-text)] placeholder:text-[var(--field-placeholder)] focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-200/50"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={as === "textarea" ? rows : undefined}
      />
    </label>
  );
};

export default Field;
