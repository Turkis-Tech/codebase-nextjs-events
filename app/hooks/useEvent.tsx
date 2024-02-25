import { useState } from "react";
import { TEvent } from "@/app/types/Event";

export type TFilterType = "location" | "date";

export const useEvents = () => {
  const [event, setEvent] = useState<TEvent | null>(null);
  const [events, setEvents] = useState<TEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [filter, setFilter] = useState({type: "location", value: "asc"});

  const sortEvents = (type: TFilterType) => {
    let sorted: TEvent[] = [];
    if(type === "location") {
      if(filter.value === "asc") {
        sorted = [...events].sort((a, b) => a.location < b.location ? 1 : -1);
        setFilter({type: "date", value: "desc"});
      } else {
        sorted = [...events].sort((a, b) => a.location > b.location ? 1 : -1);
        setFilter({type: "date", value: "asc"});
      }
    }

    else if (type === "date") {
      if(filter.value === "asc") {
        sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setFilter({type: "location", value: "desc"});
      } else {
        sorted = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setFilter({type: "location", value: "asc"});
      }
    }

    else {
      sorted = events;
    }
    
    setEvents(sorted);
  };

  const getEvents = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NODE_ENV === "development" ? "http://" : "https://"}${window.location.hostname}:${window.location.port}/api/events`
      );
      const data = await response.json();

      setEvents(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (event: TEvent) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NODE_ENV === "development" ? "http://" : "https://"}${window.location.hostname}:${window.location.port}/api/events`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
          cache: "no-store",
        }
      );
      const data = await response.json();

      setEvent(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (id: number) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NODE_ENV === "development" ? "http://" : "https://"}${window.location.hostname}:${window.location.port}/api/events?id=${id}`,
        {
          method: "DELETE",
        }
      );
      await response.json();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { event, loading, error, createEvent, deleteEvent, getEvents, events, sortEvents};
};
