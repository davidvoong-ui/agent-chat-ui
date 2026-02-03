"use client";

import Button from "@/components/Button";
import RegistrationForm from "@/features/auth/components/RegistrationForm";
import { useNewUser } from "@/features/auth/hooks/useNewUser";
import { NewRegisteredUser, UserCreate } from "@/features/auth/models";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

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
    <div className="flex flex-col gap-1 p-2">
      <h1 className="mb-5 text-center text-2xl font-semibold">
        Create an account
      </h1>

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
    </div>
  );
}
