"use client";

import { useUser } from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import { NavLink } from "./NavLink";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { user } = useUser();

  const isLoggedIn = !!user;

  return (
    <nav
      className={cn("mb-5 flex min-h-20 items-center pr-1 pl-1", className)}
      style={{ borderBottom: "1px solid #eee" }}
    >
      <div className="flex h-full grow-1 justify-between gap-1">
        <div className="flex items-end gap-1">
          <NavLink href="/">Command Center</NavLink>
          <NavLink href="/changes">Changes</NavLink>
          <NavLink href="/programmes">Programmes</NavLink>
          <NavLink href="/reports">Reports</NavLink>
          <NavLink href="/chat">Chat</NavLink>
        </div>

        {/* <div className="flex items-end text-center text-xl">Horizon Scan</div> */}

        <div className="flex items-end">
          {isLoggedIn ? (
            <NavLink href="/auth/logout">Logout</NavLink>
          ) : (
            <div className="flex gap-1">
              <NavLink href="/auth/registration">Registration</NavLink>
              <NavLink href="/auth/login">Login</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
