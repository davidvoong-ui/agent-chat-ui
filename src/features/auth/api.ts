import { apiFetch } from "@/api/fetcher";
import type { LoginResponseDTO, NewRegisteredUserDTO } from "./dtos";
import type {
  UserCreate,
  NewRegisteredUser,
  LoginCredentials,
  LoginResponse,
} from "./models";
import {
  parseLoginResponseDTO,
  parseNewRegisteredUserDTO,
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
