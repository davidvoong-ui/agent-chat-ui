"use client";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { loginUser } from "@/features/auth/api";

import { LoginForm } from "@/features/auth/components/LoginForm";
import { LoginCredentials } from "@/features/auth/models";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    credentials: LoginCredentials,
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      const loginResponse = await loginUser(credentials);
      // TODO: Do something with the access token
      console.log("loginResponse:", loginResponse);
      return true;
    } catch (error) {
      toast.error("There was an error");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header>Login</Header>
      <LoginForm
        disabled={isLoading}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
