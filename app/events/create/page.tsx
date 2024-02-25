import React from "react";
import AppContainer from "@/app/components/AppContainer";
import CreateFrom from "@/app/components/CreateForm";

export default async function Create() {
  return (
    <AppContainer id="create">
        <h1 className="text-2xl font-bold mb-4">Create Event</h1>
        <CreateFrom />
    </AppContainer>
  );
}
