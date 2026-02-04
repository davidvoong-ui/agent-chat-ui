"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import Form, { type FormProps } from "@/components/Form";

import { mapFormDataToLoginCredentials } from "../adapters/mappers";
import { EmailFormField } from "@/components/EmailFormField";
import { LoginPasswordFormField } from "@/components/LoginPasswordFormField";
import type { LoginCredentials } from "../models";

export type LoginFormData = {
  email: string;
  password: string;
};

const INITIAL_FORM_DATA: LoginFormData = {
  email: "",
  password: "",
};

interface Props extends Omit<FormProps, "onSubmit"> {
  className?: string;
  disabled?: boolean;
  onSubmit: (credentials: LoginCredentials) => Promise<void>;
}

export function LoginForm({
  className,
  disabled = false,
  onSubmit,
  ...rest
}: Props) {
  const [formData, setFormData] = useState<LoginFormData>(INITIAL_FORM_DATA);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const canSubmit = isEmailValid && !disabled;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowErrors(true);
    if (!canSubmit) return;

    const loginCredentials = mapFormDataToLoginCredentials(formData);
    await onSubmit(loginCredentials);

    setFormData(INITIAL_FORM_DATA);
    setShowErrors(false);
  };

  return (
    <Form
      {...rest}
      className={cn("flex flex-col gap-y-2", className)}
      onSubmit={handleSubmit}
    >
      <EmailFormField
        value={formData.email}
        onChange={(email) => setFormData((prev) => ({ ...prev, email }))}
        onValidityChange={setIsEmailValid}
        isDisabled={disabled}
        isShowErrors={showErrors}
      />

      <LoginPasswordFormField
        value={formData.password}
        onChange={(password) => setFormData((prev) => ({ ...prev, password }))}
        isDisabled={disabled}
      />

      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-4 rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        Log in
      </button>
    </Form>
  );
}
