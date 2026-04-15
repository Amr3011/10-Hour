type LanguageToggleProps = {
  current: "ar" | "en";
  onChange: (lang: "ar" | "en") => void;
  label: string;
  arLabel: string;
  enLabel: string;
};

const LanguageToggle = ({
  current,
  onChange,
  label,
  arLabel,
  enLabel,
}: LanguageToggleProps) => {
  return (
    <div
      className="flex items-center gap-3 text-xs"
      style={{ color: "var(--control-text)" }}
    >
      <span>{label}</span>
      <div
        className="flex overflow-hidden rounded-full border backdrop-blur"
        style={{
          borderColor: "var(--control-border)",
          background: "var(--control-bg)",
          color: "var(--control-text)",
        }}
      >
        <button
          type="button"
          className="px-3 py-1 text-xs transition"
          style={
            current === "ar"
              ? {
                  fontWeight: 600,
                  background: "var(--control-active-bg)",
                  color: "var(--control-active-text)",
                }
              : { color: "var(--control-muted)" }
          }
          onClick={() => onChange("ar")}
        >
          {arLabel}
        </button>
        <button
          type="button"
          className="px-3 py-1 text-xs transition"
          style={
            current === "en"
              ? {
                  fontWeight: 600,
                  background: "var(--control-active-bg)",
                  color: "var(--control-active-text)",
                }
              : { color: "var(--control-muted)" }
          }
          onClick={() => onChange("en")}
        >
          {enLabel}
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
