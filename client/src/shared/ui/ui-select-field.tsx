import { clsx } from "clsx";
import { useId, SelectHTMLAttributes, PropsWithRef } from "react";

export type UISelectOption = {
  value: string;
  label: string;
};
export type UiSelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UISelectOption[];
};

export function UiSelectField({
  className,
  error,
  label,
  selectProps,
  options,
}: UiSelectFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {!!label && (
        <label id={id} className="block">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 outline-none px-2 h-10",
        )}
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {!!error && <div className="text-rose-400">{error} </div>}
    </div>
  );
}
