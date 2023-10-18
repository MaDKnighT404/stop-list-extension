import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariant = "primary" | "secondary" | "outlined";
export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded cursor-pointer gap-2 items-center flex justify-center",
        {
          primary:
            "text-white hover:bg-teal-600 disabled:opacity-50 bg-teal-500 shadow-teal-500/30",
          secondary:
            "text-white hover:bg-rose-600 disabled:opacity-50 bg-rose-500 shadow-rose-500/30",
          outlined:
            "border hover:bg-slate-500 disabled:opacity-50 border-slate-300",
        }[variant],
      )}
    />
  );
}
