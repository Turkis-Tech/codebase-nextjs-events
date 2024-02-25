"use client";
import React, { useEffect } from "react";
import { useEvents } from "@/app/hooks/useEvent";
import { notFound, useParams } from "next/navigation";
import AppLoading from "./AppLoading";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { getEvent, loading, event, error } = useEvents();
  useEffect(() => {
    getEvent(Number(id));
  }, [id]);

  if (loading) return <AppLoading />;

  if (error) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Event Details</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{event?.name}</h2>
        <p className="text-gray-600 mb-4">{event?.description}</p>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-gray-600">
            {event?.date ? new Date(event?.date).toDateString() : ""}{" "}
            {event?.time}
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-gray-600">{event?.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
