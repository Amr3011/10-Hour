type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition hover:scale-105"
      style={{
        borderColor: "var(--control-border)",
        background: "var(--control-bg)",
        color: "var(--control-text)",
        boxShadow: "0 10px 24px var(--card-shadow)",
      }}
    >
      <span
        className={`absolute transition ${
          isDark ? "scale-75 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{ color: "var(--control-text)" }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </span>
      <span
        className={`absolute transition ${
          isDark ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        style={{ color: "var(--control-text)" }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 1 0 9.8 9.8Z" />
        </svg>
      </span>
    </button>
  );
};

export default ThemeToggle;
