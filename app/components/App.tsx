"use client";
import { SessionProvider } from "next-auth/react";
import { AppProvider } from "./AppContext";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <SessionProvider>{children}</SessionProvider>
    </AppProvider>
  );
}
