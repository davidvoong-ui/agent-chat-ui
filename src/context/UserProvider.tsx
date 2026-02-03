// src/context/UserProvider.tsx
"use client";

import { useState, ReactNode } from "react";
import { UserContext, UserContextValue } from "./UserContext";

export type User = { id: number };

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();

  const actions: UserContextValue["actions"] = {
    setUser,
    logout: () => setUser(undefined),
  };

  return (
    <UserContext.Provider value={{ user, actions }}>
      {children}
    </UserContext.Provider>
  );
}
