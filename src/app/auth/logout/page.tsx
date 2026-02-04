"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";

export default function Page() {
  const router = useRouter();
  const { actions: userActions } = useUser();

  useEffect(() => {
    userActions.logout();
    router.replace("/auth/login");
  }, [userActions, router]);

  return null;
}
