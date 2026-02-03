// src/context/UserContext.ts
import { createContext } from "react";
import type { User } from "./UserProvider"; // optional if separated

export type UserContextValue = {
  user?: User;
  actions: {
    setUser: (user?: User) => void;
    logout: () => void;
  };
};

export const UserContext = createContext<UserContextValue | null>(null);
