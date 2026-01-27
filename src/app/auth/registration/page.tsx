"use client";

import Button from "@/components/Button";
import RegistrationForm from "@/features/auth/components/RegistrationForm";
import { useRegisterUser } from "@/features/auth/hooks/useRegisterUser";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function Registration() {
  const { register, isLoading } = useRegisterUser();

  const handleSubmit = async (data: { email: string; password: string }) => {
    const promise = register(data);
    toast.promise(promise, {
      loading: "Creating account…",
      success: "Account created 🎉",
      error: (err) =>
        err instanceof Error ? err.message : "There was an error.",
    });
    return promise;
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
