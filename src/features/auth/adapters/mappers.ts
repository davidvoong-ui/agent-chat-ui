import { z } from "zod";
import { RegistrationFormData } from "../components/RegistrationForm";
import { UserCreate } from "../models";

export function mapFormDataToUserCreate(
  formData: RegistrationFormData,
): UserCreate {
  return {
    email: z.email().parse(formData.email),
    password: formData.password,
  };
}
