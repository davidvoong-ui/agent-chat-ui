"use client";

import { useUser } from "@/hooks/useUser";
import Link from "next/link";

export function Navbar() {
  const { user } = useUser();

  const isLoggedIn = !!user;

  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <div className="flex justify-between">
        <div>
          <Link href="/">Dashboard</Link>
          {" | "}
          <Link href="/chat">Chat</Link>
        </div>

        <div>
          {isLoggedIn ? (
            <Link href="/logout">Logout</Link>
          ) : (
            <Link href="/registration">Registration</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
