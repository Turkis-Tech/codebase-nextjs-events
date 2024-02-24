import type { Metadata } from "next";
import LoginForm from "@/app/components/LoginForm";
import AppContainer from "@/app/components/AppContainer";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <AppContainer id="login">
      <h2 className="text-3xl font-bold text-slate-600 text-center mb-1">
        LOGIN EVENT
      </h2>
      <h2 className="text-2xl text-slate-500 text-center mb-4">
        MANAGEMENT APP
      </h2>
      <LoginForm />
    </AppContainer>
  );
}
