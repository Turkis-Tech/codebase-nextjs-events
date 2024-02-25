"use client";
import React from "react";
import { TEvent } from "../types/Event";

const EventList = ({ events }: { events: TEvent[] }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Location</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Time</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventList;
