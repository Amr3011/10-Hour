import type { ReactNode } from "react";

type ScreenShellProps = {
  children: ReactNode;
};

const ScreenShell = ({ children }: ScreenShellProps) => {
  return (
    <div className="min-h-screen bg-(--page-bg) text-(--page-text)">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-(--glow-amber) blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-(--glow-sky) blur-3xl" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-6 py-12">
        {children}
      </div>
    </div>
  );
};

export default ScreenShell;
