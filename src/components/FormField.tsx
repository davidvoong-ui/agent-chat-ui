import { cn } from "@/lib/utils";

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
    <>
      <div className="grid grid-cols-12">
        <label
          className={cn(
            "col-span-3 flex items-center justify-end pr-1",
            labelClassName,
          )}
        >
          {label}
        </label>

        <div className="col-span-9">{children}</div>
      </div>

      {error ? (
        <p className="mt-1 min-h-[1.25rem] text-right text-sm text-red-600">
          {error}
        </p>
      ) : (
        ""
      )}
    </>
  );
}
