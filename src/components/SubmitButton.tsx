import Button from "./Button";
import type { ButtonProps } from "@/components/Button";

export function SubmitButton(props: ButtonProps) {
  return (
    <Button
      type="submit"
      {...props}
    />
  );
}
