import { ApiError } from "@/types/api-error";
import { useState } from "react";

export type RegisterUserInput = {
  email: string;
  password: string;
};

export function useRegisterUser() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async (input: RegisterUserInput) => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new ApiError(data?.message ?? "Registration failed", res.status);
      }

      return data;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
  };
}
