import { z } from "zod";

import type { UserCreateDTO, NewRegisteredUserDTO } from "@/features/auth/dtos";
import type { UserCreate, NewRegisteredUser } from "@/features/auth/models";

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
