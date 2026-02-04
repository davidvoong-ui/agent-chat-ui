"use client";

import { useState } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import Button from "@/components/Button";

import { NewRegisteredUser, UserCreate } from "@/features/auth/models";
import { useNewUser } from "@/features/auth/hooks/useNewUser";
import RegistrationForm from "@/features/auth/components/RegistrationForm";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export default function Registration() {
  const { actions: newUserActions } = useNewUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (user: UserCreate): Promise<NewRegisteredUser> => {
    setIsLoading(true);
    const promise = newUserActions.createNewUser(user);

    toast.promise(promise, {
      loading: "Creating account…",
      success: "Account created 🎉",
      error: (err) =>
        err instanceof Error ? err.message : "There was an error.",
    });
    try {
      const result = await promise;
      return result;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header>Create an account</Header>

      <div className="flex flex-col gap-2">
        <RegistrationForm
          id="registration-form"
          disabled={isLoading}
          onSubmit={handleSubmit}
        />

        <div className="flex justify-end">
          <Button
            className={cn(
              "bg-green-100",
              "hover:bg-green-300",
              "disabled:bg-gray-300 disabled:text-gray-100",
            )}
            form="registration-form"
            type="submit"
            disabled={isLoading}
          >
            Register
          </Button>
        </div>
      </div>
    </Container>
  );
}
