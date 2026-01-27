"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import Form, { type FormProps } from "@/components/Form";
import { FormField } from "@/components/FormField";
import type { FormErrors } from "@/types/form-errors";

import {
  RegistrationFields,
  validateRegistration,
} from "../validation/validate-registration";

interface Props extends Omit<FormProps, "onSubmit"> {
  className?: string;
  disabled: boolean;
  onSubmit: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  labelClassName?: string;
  inputClassName?: string;
}

const validateForm = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  return validateRegistration({
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  });
};

export default function RegistrationForm({
  className,
  labelClassName,
  inputClassName,
  disabled = false,
  onSubmit,
  ...rest
}: Props) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors<RegistrationFields>>({});

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    if (!hasSubmitted) return;
    const validationErrors = validateForm(e.currentTarget);
    setErrors(validationErrors);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (disabled) return;

    setHasSubmitted(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };

    const validationErrors = validateRegistration(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await onSubmit(data);
    setHasSubmitted(false);
    form.reset();
    setErrors({});
  };

  return (
    <Form
      {...rest}
      className={cn("flex flex-col gap-y-2", className)}
      onChange={handleChange}
      onSubmit={handleSubmit}
      noValidate
    >
      <FormField
        label="Email"
        error={errors.email}
        labelClassName={labelClassName}
      >
        <input
          className={cn(
            "w-full rounded border p-2",
            errors.email && "border-red-500",
            inputClassName,
          )}
          name="email"
          type="email"
          disabled={disabled}
        />
      </FormField>

      <FormField
        label="Password"
        error={errors.password}
        labelClassName={labelClassName}
      >
        <input
          className={cn(
            "w-full rounded border p-2",
            errors.password && "border-red-500",
            inputClassName,
          )}
          name="password"
          type="password"
          disabled={disabled}
        />
      </FormField>
    </Form>
  );
}
