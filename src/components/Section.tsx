import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"section">;

export function Section({ className, ...rest }: Props) {
  return (
    <section
      className={cn(className)}
      {...rest}
    />
  );
}
