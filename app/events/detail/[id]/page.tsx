import React, {useEffect} from "react";
import AppContainer from "@/app/components/AppContainer";
import { useEvents } from "@/app/hooks/useEvent";
import EventDetail from "@/app/components/EventDetail";

export default function Details() {
  return (
    <AppContainer id="event-detail">
      <EventDetail />
    </AppContainer>
  );
}
