import { useEffect } from "react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { FormField } from "./FormField";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onValidityChange: (isValid: boolean) => void;
  isDisabled?: boolean;
  isShowErrors: boolean;
};

const emailSchema = z.email("Invalid email address");

function validate(email: string): string | null {
  const result = emailSchema.safeParse(email);
  return result.success ? null : result.error.issues[0].message;
}

export function EmailFormField({
  value,
  onChange,
  onValidityChange,
  isDisabled = false,
  isShowErrors,
}: Props) {
  const error = validate(value);

  useEffect(() => {
    onValidityChange(error === null);
  }, [error, onValidityChange]);

  const handleChange = (email: string) => {
    onChange(email);
  };

  return (
    <FormField
      label="Email"
      error={isShowErrors ? (error ?? undefined) : undefined}
    >
      <input
        className={cn(
          "w-full rounded border p-2",
          isShowErrors && error && "border-red-500",
        )}
        name="email"
        type="email"
        value={value}
        disabled={isDisabled}
        onChange={(e) => handleChange(e.target.value)}
      />
    </FormField>
  );
}
