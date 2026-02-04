import { cn } from "@/lib/utils";
import { FormField } from "@/components/FormField";

type Props = {
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
};

export function LoginPasswordFormField({
  value,
  onChange,
  isDisabled = false,
}: Props) {
  return (
    <FormField label="Password">
      <input
        className={cn("w-full rounded border p-2")}
        name="password"
        type="password"
        value={value}
        disabled={isDisabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormField>
  );
}
