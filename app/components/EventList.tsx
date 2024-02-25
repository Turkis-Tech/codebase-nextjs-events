"use client";
import React, { useEffect } from "react";
import { TEvent } from "@/app/types/Event";
import AppLoading from "@/app/components/AppLoading";
import { useEvents } from "@/app/hooks/useEvent";

const EventList = () => {
  const { deleteEvent, loading, getEvents, events } = useEvents();
  const onDeleteClicked = async (id: number) => {
    await deleteEvent(id);
    await getEvents();
  };

  useEffect(() => {
    const fetchData = async () => {
      await getEvents();
    };

    fetchData();
  }, []);

  return loading ? (
    <AppLoading />
  ) : (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Location</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Time</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event: TEvent, index: number) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
            <td className="border px-4 py-2">{event.name}</td>
            <td className="border px-4 py-2">{event.description}</td>
            <td className="border px-4 py-2">{event.location}</td>
            <td className="border px-4 py-2">
              {new Date(event.date).toDateString()}
            </td>
            <td className="border px-4 py-2">{event.time}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => event.id && onDeleteClicked(event.id)}
                disabled={loading}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                {loading ? "Deleting Event..." : "Delete Event"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventList;
