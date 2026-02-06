import { cn } from "@/lib/utils";

export type ListItemProps = React.ComponentPropsWithoutRef<"li">;

export function ListItem({ ...rest }: ListItemProps) {
  return (
    <li
      className={cn(
        "border-t border-r border-l border-gray-300 p-2",
        "first:rounded-tl first:rounded-tr",
        "last:rounded-br last:rounded-bl last:border-b",
      )}
      {...rest}
    />
  );
}
