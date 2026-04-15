import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import ScreenShell from "../../components/layout/ScreenShell";
import Field from "../../components/ui/Field";
import SectionHeader from "../../components/ui/SectionHeader";
import LanguageToggle from "../../components/ui/LanguageToggle";
import ThemeToggle from "../../components/ui/ThemeToggle";
import ResultCard from "../../components/ui/ResultCard";
import StatCard from "../../components/ui/StatCard";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Notice from "../../components/ui/Notice";
import { predictPhishing } from "../../services/phishingApi";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [sender, setSender] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    prediction: string;
    phishingConfidence: number;
    safeConfidence: number;
  } | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const lang = i18n.language === "en" ? "en" : "ar";
  const direction = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await predictPhishing(sender, content);
      setResult(response);
    } catch (err) {
      console.error(err);
      setError(t("app.error"));
    } finally {
      setLoading(false);
    }
  };

  const formattedPhish = useMemo(() => {
    if (!result) return "--";
    return result.phishingConfidence.toFixed(2);
  }, [result]);

  const formattedSafe = useMemo(() => {
    if (!result) return "--";
    return result.safeConfidence.toFixed(2);
  }, [result]);

  return (
    <div dir={direction}>
      <ScreenShell>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeader title={t("app.title")} subtitle={t("app.subtitle")} />
          <div className="flex flex-wrap items-center gap-3">
            <LanguageToggle
              current={lang}
              onChange={(next) => void i18n.changeLanguage(next)}
              label={t("nav.lang")}
              arLabel={t("nav.ar")}
              enLabel={t("nav.en")}
            />
            <ThemeToggle
              theme={theme}
              onToggle={() =>
                setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              }
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form
            className="rounded-3xl border-(--border) bg-(--surface) p-6 backdrop-blur"
            style={{ boxShadow: "0 24px 60px var(--card-shadow)" }}
            onSubmit={handleSubmit}
          >
            <div className="flex min-h-full flex-col gap-5">
              <Field
                label={t("app.senderLabel")}
                placeholder={t("app.senderPlaceholder")}
                value={sender}
                onChange={setSender}
              />
              <Field
                label={t("app.contentLabel")}
                placeholder={t("app.contentPlaceholder")}
                value={content}
                onChange={setContent}
                as="textarea"
                rows={8}
              />
              <div className="mt-auto flex flex-wrap items-center justify-end gap-3 pt-2">
                <PrimaryButton
                  label={t("app.analyze")}
                  loadingLabel={t("app.analyzing")}
                  loading={loading}
                />
                {error ? <Notice message={error} /> : null}
              </div>
            </div>
          </form>

          <div className="flex flex-col gap-6">
            <ResultCard
              title={t("app.resultTitle")}
              description={t("app.confidenceNote")}
            >
              <StatCard
                label={t("app.prediction")}
                value={result?.prediction ?? "--"}
                tone="primary"
                className="w-full"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <StatCard
                  label={t("app.phishConfidence")}
                  value={formattedPhish}
                  tone="warning"
                />
                <StatCard
                  label={t("app.safeConfidence")}
                  value={formattedSafe}
                  tone="success"
                />
              </div>
            </ResultCard>

            <div className="rounded-3xl border border-dashed border-(--border) bg-(--surface-muted) p-6 text-sm text-(--muted-text) backdrop-blur">
              {t("app.emptyState")}
            </div>
          </div>
        </div>
      </ScreenShell>
    </div>
  );
};

export default Home;
