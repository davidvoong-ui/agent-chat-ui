"use client";

import { useUser } from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { user } = useUser();

  const isLoggedIn = !!user;

  return (
    <nav
      className={cn("mb-5", className)}
      style={{ padding: 16, borderBottom: "1px solid #eee" }}
    >
      <div className="flex h-full justify-between">
        <div className="flex items-end">
          <Link href="/">Dashboard</Link>
          {" | "}
          <Link href="/chat">Chat</Link>
        </div>

        <div className="flex items-end text-center text-xl">
          Compliance Live
        </div>

        <div className="flex items-end">
          {isLoggedIn ? (
            <Link href="/auth/logout">Logout</Link>
          ) : (
            <Link href="/auth/registration">Registration</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
