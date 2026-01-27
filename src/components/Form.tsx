export interface FormProps extends React.ComponentPropsWithoutRef<"form"> {
  className?: string;
}

export default function Form({ className, ...rest }: FormProps) {
  return (
    <form
      {...rest}
      className={className}
    />
  );
}
