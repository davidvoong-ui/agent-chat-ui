export type FormErrors<T extends string = string> = {
  _form?: string;
} & Partial<Record<T, string>>;
