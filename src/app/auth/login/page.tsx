"use client";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

import { LoginForm } from "@/features/auth/components/LoginForm";
import { LoginCredentials } from "@/features/auth/models";

export default function Page() {
  const handleSubmit = async (credentials: LoginCredentials): Promise<void> => {
    console.log("TODO:");
  };

  return (
    <Container>
      <Header>Login</Header>
      <LoginForm onSubmit={handleSubmit} />
    </Container>
  );
}
