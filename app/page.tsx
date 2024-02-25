import AppContainer from "@/app/components/AppContainer";
import EventCards from "./components/EventCards";

export default function Home() {
  return (
    <AppContainer id="home">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <EventCards />
    </AppContainer>
  );
}
