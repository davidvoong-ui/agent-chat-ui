"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <Link href="/">Dashboard</Link>
      {" | "}
      <Link href="/chat">Chat</Link>
    </nav>
  );
}
