type PrimaryButtonProps = {
  label: string;
  loadingLabel: string;
  loading: boolean;
};

const PrimaryButton = ({
  label,
  loadingLabel,
  loading,
}: PrimaryButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex items-center justify-center rounded-full border px-8 py-3 text-base font-semibold shadow-sm transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      style={{
        borderColor: "var(--action-border)",
        background: "var(--action-bg)",
        color: "var(--action-text)",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.background = "var(--action-hover-bg)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.background = "var(--action-bg)";
      }}
    >
      {loading ? loadingLabel : label}
    </button>
  );
};

export default PrimaryButton;
