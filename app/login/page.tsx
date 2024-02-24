import type { Metadata } from "next";
import LoginForm from "@/app/components/LoginForm";
import AppContainer from "@/app/components/AppContainer";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <AppContainer id="login">
      <h2 className="text-lg font-bold my-4">LOGIN EVENT APP</h2>
      <LoginForm />
    </AppContainer>
  );
}
