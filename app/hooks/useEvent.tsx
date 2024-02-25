import { useState } from "react";
import { TEvent } from "@/app/types/Event";
const useEvents = () => {
  const [event, setEvent] = useState<TEvent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

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
        }
      );
      const data = await response.json();

      // Update the event state with the fetched data
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

  return { event, loading, error, createEvent, deleteEvent };
};

export default useEvents;
