import { UserCreateDTO } from "../dtos";
import { UserCreate } from "../models";

export function serializeCreateUser(newUser: UserCreate): UserCreateDTO {
  const newUserDTO = { ...newUser }; // trivial serializing
  return newUserDTO;
}
