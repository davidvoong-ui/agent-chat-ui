import { z } from "zod";

import type {
  UserCreateDTO,
  NewRegisteredUserDTO,
  LoginResponseDTO,
  UserDTO,
} from "@/features/auth/dtos";
import type {
  UserCreate,
  NewRegisteredUser,
  LoginResponse,
  User,
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

export function parseUserDTO(userDTO: UserDTO): User {
  return {
    id: z.uuidv4().parse(userDTO.id),
    email: z.email().parse(userDTO.email),
    isActive: z.boolean().parse(userDTO.is_active),
    isVerified: z.boolean().parse(userDTO.is_verified),
    createdAt: z.coerce.date().parse(userDTO.created_at),
  };
}
