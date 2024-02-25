import Link from "next/link";
import AppContainer from "./components/AppContainer";

export default function NotFound() {
  return (
    <AppContainer id="not-found">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </AppContainer>
  );
}