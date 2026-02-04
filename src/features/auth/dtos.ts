import { components } from "@/api/openapi";

type schemas = components["schemas"];

export type UserCreateDTO = schemas["CreateUserRequest"];
export type NewRegisteredUserDTO = schemas["UserResponse"];
export type LoginCredentialsDTO = schemas["LoginUserRequest"];
export type LoginResponseDTO = schemas["LoginUserResponse"];
