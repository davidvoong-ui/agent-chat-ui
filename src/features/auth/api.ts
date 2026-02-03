import { apiFetcher } from "@/api/fetcher";
import { UserCreate, NewRegisteredUser } from "./models";
import { parseNewRegisteredUserDTO } from "./adapters/parsers";
import { serializeCreateUser } from "./adapters/serializers";

export async function createNewUser(
  newUser: UserCreate,
): Promise<NewRegisteredUser> {
  const newRegisteredUserDTO = await apiFetcher("/auth", {
    method: "POST",
    body: serializeCreateUser(newUser),
  });

  const newRegisteredUser = parseNewRegisteredUserDTO(newRegisteredUserDTO);
  return newRegisteredUser;
}
