import AppContainer from "@/app/components/AppContainer";

export default async function Events() {
  try {
    const response = await fetch("http://localhost:3000/api/events", {
      cache: "no-store",
    });
    const events = await response.json();

    return (
      <AppContainer id="events">
        <h2>Event List</h2>
        {events.map((event: any, index: number) => (
          <p key={index}>{event.name}</p>
        ))}
      </AppContainer>
    );
  } catch (error) {
    return <p>hata</p>;
  }
}
