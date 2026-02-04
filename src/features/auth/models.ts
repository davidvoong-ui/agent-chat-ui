import type {
  LoginCredentialsDTO,
  UserCreateDTO,
  NewRegisteredUserDTO,
  LoginResponseDTO,
} from "@/features/auth/dtos";

export type UserCreate = UserCreateDTO;
export type NewRegisteredUser = NewRegisteredUserDTO;
export type LoginCredentials = LoginCredentialsDTO;
export type LoginResponse = Omit<
  LoginResponseDTO,
  "access_token" | "token_type"
> & {
  accessToken: string;
  tokenType: string;
};
