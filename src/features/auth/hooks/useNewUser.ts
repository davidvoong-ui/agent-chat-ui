import { useState } from "react";
import type { UserCreate, NewRegisteredUser } from "../models";
import { createNewUser } from "../api";

export function useNewUser() {
  const [state, setState] = useState<NewRegisteredUser | null>(null);
  const actions = {
    createNewUser: async (newUser: UserCreate): Promise<NewRegisteredUser> => {
      const newRegisteredUser = await createNewUser(newUser);
      setState(newRegisteredUser);
      return newRegisteredUser;
    },
  };

  return { state, actions };
}
