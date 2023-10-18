import { clsx } from "clsx";
import { useId, InputHTMLAttributes, PropsWithRef } from "react";
export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({
  className,
  error,
  label,
  inputProps,
}: UiTextFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {!!label && (
        <label id={id} className="block">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "h-10 rounded border border-slate-300 px-2 outline-none focus:border-teal-600",
        )}
      />
      {!!error && <div className="text-rose-400">{error} </div>}
    </div>
  );
}
