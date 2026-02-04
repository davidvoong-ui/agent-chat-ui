import { cn } from "@/lib/utils";
import { FormRow } from "./FormRow";

export function FormField({
  label,
  error,
  labelClassName,
  children,
}: {
  label: string;
  error?: string;
  labelClassName?: string;
  children: React.ReactElement;
}) {
  return (
    <FormRow>
      <label
        className={cn(
          "col-span-3 flex items-center justify-end pr-1",
          labelClassName,
        )}
      >
        {label}
      </label>

      <div className="col-span-9">
        {children}
        {error && (
          <p className="mt-1 min-h-[1.25rem] text-right text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </FormRow>
  );
}
