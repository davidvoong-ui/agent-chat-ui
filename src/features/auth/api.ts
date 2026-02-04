import { apiFetch } from "@/api/fetcher";
import type { LoginResponseDTO, NewRegisteredUserDTO, UserDTO } from "./dtos";
import type {
  UserCreate,
  NewRegisteredUser,
  LoginCredentials,
  LoginResponse,
  User,
} from "./models";
import {
  parseLoginResponseDTO,
  parseNewRegisteredUserDTO,
  parseUserDTO,
} from "./adapters/parsers";
import {
  serializeCreateUser,
  serializeLoginCredentials,
} from "./adapters/serializers";

export async function createNewUser(
  newUser: UserCreate,
): Promise<NewRegisteredUser> {
  const newRegisteredUserDTO = await apiFetch<NewRegisteredUserDTO>(
    "/auth/register",
    {
      method: "POST",
      body: JSON.stringify(serializeCreateUser(newUser)),
    },
  );

  const newRegisteredUser = parseNewRegisteredUserDTO(newRegisteredUserDTO);
  return newRegisteredUser;
}

export async function loginUser(
  loginCredentials: LoginCredentials,
): Promise<LoginResponse> {
  const loginResponseDTO = await apiFetch<LoginResponseDTO>("/auth/login", {
    method: "POST",
    body: JSON.stringify(serializeLoginCredentials(loginCredentials)),
  });
  const loginResponse = parseLoginResponseDTO(loginResponseDTO);
  return loginResponse;
}

export async function getMe(): Promise<User> {
  const meDTO = await apiFetch<UserDTO>("/auth/me", { method: "GET" });
  return parseUserDTO(meDTO);
}
