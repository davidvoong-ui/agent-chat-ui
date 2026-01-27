import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

export default function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn("rounded border border-gray-300 p-3", className)}
    />
  );
}
