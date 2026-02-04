import type {
  LoginCredentialsDTO,
  UserCreateDTO,
  NewRegisteredUserDTO,
  LoginResponseDTO,
  UserDTO,
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
export type User = Omit<UserDTO, "is_active" | "is_verified" | "created_at"> & {
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
};
