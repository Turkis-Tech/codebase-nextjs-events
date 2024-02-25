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
        `https://${window.location.hostname}:${window.location.port}/api/events`,
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

  return { event, loading, error, createEvent };
};

export default useEvents;
