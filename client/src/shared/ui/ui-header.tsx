import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";

export function UiHeader({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        "borber-b flex items-center justify-between border-b-slate-300 px-4 py-5",
        className,
      )}
    >
      <UiLogo />
      {right}
    </header>
  );
}
