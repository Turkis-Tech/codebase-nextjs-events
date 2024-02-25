"use client";
import React from "react";
import Link from "next/link";
import { TEvent } from "@/app/types/Event";

const EventCard = ({ id, name, description, date, time, location }: TEvent) => {
  return (
    <div className="flex flex-col flex-auto bg-white rounded-lg shadow-md p-8 m-4 hover:bg-slate-100 cursor-pointer transition-all">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-500 mb-2">{description}</p>
      <p className="text-gray-500 mb-2">
        Date: {new Date(date).toDateString()}
      </p>
      <p className="text-gray-500 mb-2">Time: {time}</p>
      <p className="text-gray-500">Location: {location}</p>
      <Link href={`/events/detail/${id}`} className="mt-4 bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded w-full">Event Detail</Link>
    </div>
  );
};

export default EventCard;
