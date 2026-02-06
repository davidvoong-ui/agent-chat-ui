"use client";

import React, { createContext, useContext, useState } from "react";

export type AuthModalMode = "login" | "register";

interface AuthModalState {
  isOpen: boolean;
  mode: AuthModalMode;
  open: (mode: AuthModalMode) => void;
  close: () => void;
}

const AuthModalContext = createContext<AuthModalState | null>(null);

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthModalMode>("login");

  const open = (mode: AuthModalMode) => {
    setMode(mode);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <AuthModalContext.Provider value={{ isOpen, mode, open, close }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const ctx = useContext(AuthModalContext);
  if (!ctx) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return ctx;
}
