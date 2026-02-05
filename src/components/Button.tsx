import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

export default function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        "cursor-pointer rounded border border-gray-300 p-3",
        "bg-green-200",
        "hover:bg-green-300",
        "disabled:bg-gray-100 disabled:text-gray-400",
        className,
      )}
    />
  );
}
