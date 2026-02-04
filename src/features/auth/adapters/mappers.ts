import { z } from "zod";
import { RegistrationFormData } from "../components/RegistrationForm";
import { LoginCredentials, UserCreate } from "../models";
import { LoginFormData } from "../components/LoginForm";

export function mapFormDataToUserCreate(
  formData: RegistrationFormData,
): UserCreate {
  return {
    email: z.email().parse(formData.email),
    password: formData.password,
  };
}

export function mapFormDataToLoginCredentials(
  formData: LoginFormData,
): LoginCredentials {
  return {
    email: formData.email,
    password: formData.password,
  };
}
