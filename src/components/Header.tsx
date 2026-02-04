import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"h1"> & {};

export function Header({ className, ...rest }: Props) {
  return (
    <h1
      className={cn("mb-5 text-center text-2xl font-semibold", className)}
      {...rest}
    />
  );
}
