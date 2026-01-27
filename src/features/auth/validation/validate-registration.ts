import type { FormErrors } from "@/types/form-errors";

export type RegistrationFields = "email" | "password";

export function validateRegistration(data: {
  email: string;
  password: string;
}): FormErrors<RegistrationFields> {
  const errors: FormErrors<RegistrationFields> = {};

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else {
    if (data.password.length < 8) {
      errors.password = "Password must be at least 12 characters";
    } else if (!/[A-Z]/.test(data.password)) {
      errors.password = "Password must contain an uppercase letter";
    } else if (!/[a-z]/.test(data.password)) {
      errors.password = "Password must contain a lowercase letter";
    } else if (!/[0-9]/.test(data.password)) {
      errors.password = "Password must contain a number";
    } else if (!/[^\w\s]/.test(data.password)) {
      errors.password = "Password must contain a special character";
    }
  }

  return errors;
}
