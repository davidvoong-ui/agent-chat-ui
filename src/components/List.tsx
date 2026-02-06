export type ListProps = React.ComponentPropsWithoutRef<"ul">;

export function List({ ...rest }: ListProps) {
  return <ul {...rest} />;
}
