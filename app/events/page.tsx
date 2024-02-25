import Link from "next/link";
import { headers } from "next/headers";
import AppContainer from "@/app/components/AppContainer";
import { TEvent } from "@/app/types/Event";
import EventList from "../components/EventList";

export default async function Events() {
  try {
    const fetchEvents = async (): Promise<TEvent[]> => {
      const headersList = headers();
      const domain = headersList.get("host");

      const response = await fetch(`${process.env.NODE_ENV === "development" ? "http://" : "https://"}${domain}/api/events`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to get events");
      }

      return response.json();
    };
    const events: TEvent[] = await fetchEvents();

    return (
      <AppContainer id="events">
        <h2 className="text-lg">Event List</h2>
        <Link
          href="/events/create"
          className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </Link>
        <EventList events={events} />
      </AppContainer>
    );
  } catch (error) {
    return <p>hata</p>;
  }
}
