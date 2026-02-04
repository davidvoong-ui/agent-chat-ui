import { LoginCredentialsDTO, UserCreateDTO } from "../dtos";
import { LoginCredentials, UserCreate } from "../models";

export function serializeCreateUser(newUser: UserCreate): UserCreateDTO {
  const newUserDTO = { ...newUser }; // trivial serializing
  return newUserDTO;
}

export function serializeLoginCredentials(
  loginCredentials: LoginCredentials,
): LoginCredentialsDTO {
  const loginCredentialsDTO = { ...loginCredentials }; // trivial
  return loginCredentialsDTO;
}
