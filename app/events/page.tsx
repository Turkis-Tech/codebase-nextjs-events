import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AppContainer from "@/app/components/AppContainer";
import EventList from "../components/EventList";

export default async function Events() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <AppContainer id="events">
      <h2 className="text-2xl text-slate-500 text-center mb-4">Event List</h2>
      <hr className="border-t border-gray-400 my-4 h-1 w-full opacity-50" />
      <EventList />
      <Link
        href="/events/create"
        className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded w-full text-center mt-4"
      >
        Create Event
      </Link>
    </AppContainer>
  );
}
