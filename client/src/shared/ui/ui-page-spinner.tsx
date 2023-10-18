import clsx from "clsx";
import { UiSpinner } from "./ui-spinner";

export function UiPageSpinner({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center bg-slate-100",
        className,
      )}
    >
      <UiSpinner className="h-24 w-24 text-teal-600" />
    </div>
  );
}
