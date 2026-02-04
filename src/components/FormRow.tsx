import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"div">;

export function FormRow({ className, ...rest }: Props) {
  return (
    <div
      className={cn("grid grid-cols-12 gap-2", className)}
      {...rest}
    />
  );
}
