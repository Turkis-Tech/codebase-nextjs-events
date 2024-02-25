"use client";
import React, { useEffect, useCallback } from "react";
import { useEvents } from "@/app/hooks/useEvent";
import EventCard from "./EventCard";
import { TEvent } from "@/app/types/Event";
import AppLoading from "./AppLoading";

const EventCards = () => {
  const { events, getEvents, loading, sortEvents } = useEvents();
  const [search, setSearch] = React.useState("");
  const eventSearch = useCallback(
    (e: TEvent) => e.name.toLowerCase().match(search.toLowerCase()),
    [search]
  );

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section id="events" className="w-full flex-none">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Events by Name..."
          onChange={(e) => setSearch(e.target.value)}
          className="form-input w-full px-4 py-2 outline-none focus:border-none border border-gray-300 rounded-md focus:ring-1 focus:text-teal-700 focus:ring-teal-700 transition-all"
        />
        <button className="absolute top-0 right-0 px-3 py-2 bg-teal-700 hover:bg-teal-900 text-white rounded-md transition-all">
          Search
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => sortEvents("location")}
          className="flex justify-center items-center mt-4 bg-white hover:bg-slate-100 text-teal-700 font-bold py-2 px-4 rounded"
          type="button"
        >
          <p>Filter by Location</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 14a.5.5 0 01-.354-.854l4.792-4.792a.5.5 0 01.708.708l-5.146 5.147a.5.5 0 01-.708 0L5.854 9.062a.5.5 0 01.708-.708l4.792 4.792A.5.5 0 0110 14z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => sortEvents("date")}
          className="flex justify-center items-center mt-4 bg-white hover:bg-slate-100 text-teal-700 font-bold py-2 px-4 rounded"
          type="button"
        >
          <p>Filter by Date</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 14a.5.5 0 01-.354-.854l4.792-4.792a.5.5 0 01.708.708l-5.146 5.147a.5.5 0 01-.708 0L5.854 9.062a.5.5 0 01.708-.708l4.792 4.792A.5.5 0 0110 14z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center align-middle gap-4">
        {loading ? (
          <AppLoading />
        ) : (
          events
            .filter(eventSearch)
            .map((event) => <EventCard key={event.id} {...event} />)
        )}
      </div>
    </section>
  );
};

export default EventCards;
