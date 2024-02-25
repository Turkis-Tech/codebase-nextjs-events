"use client"; // Error components must be Client Components

import { useEffect } from "react";
import AppContainer from "./components/AppContainer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <AppContainer id="error">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </AppContainer>
  );
}
