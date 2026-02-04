import { z } from "zod";

import type {
  UserCreateDTO,
  NewRegisteredUserDTO,
  LoginResponseDTO,
} from "@/features/auth/dtos";
import type {
  UserCreate,
  NewRegisteredUser,
  LoginResponse,
} from "@/features/auth/models";

export function parseCreateUser(user: UserCreateDTO): UserCreate {
  return {
    ...user,
    email: z.email().parse(user.email),
  };
}

export function parseNewRegisteredUserDTO(
  user: NewRegisteredUserDTO,
): NewRegisteredUser {
  return {
    ...user,
    email: z.email().parse(user.email),
  };
}

export function parseLoginResponseDTO(
  loginResponseDTO: LoginResponseDTO,
): LoginResponse {
  return {
    accessToken: z.string().parse(loginResponseDTO.access_token),
    tokenType: z.string().parse(loginResponseDTO.token_type),
  };
}
