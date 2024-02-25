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
        <h2 className="text-2xl text-slate-500 text-center mb-4">Event List</h2>
        <hr className="border-t border-gray-400 my-4 h-1 w-full opacity-50" />
        <EventList events={events} />
        <Link
          href="/events/create"
          className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded w-full text-center mt-4"
        >
          Create Event
        </Link>
      </AppContainer>
    );
  } catch (error) {
    return <p>hata</p>;
  }
}
