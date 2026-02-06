"use client";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Panel } from "@/components/Panel";

export default function Registration() {
  return (
    <Container>
      <Panel>
        <Header className="mb-0 flex">Account Registration Successful</Header>
      </Panel>
      <div>The account registration was successful. Next login.</div>
    </Container>
  );
}
