import React from "react";
import Card from "../components/Card";
import { getOwnEvents } from "../api/event";
import UserContext from "../hooks/UserContext";
import { CardsOverviewContainer } from "../components/Container";

export default function Cards() {
  const [events, setEvents] = React.useState([]);
  const userName = React.useContext(UserContext);

  async function fetchEvents() {
    const result = await getOwnEvents(userName);
    setEvents(result);
  }
  React.useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <CardsOverviewContainer>
      {events.map(event => {
        const eventData = { title: event.title, date: event.date, description: event.descr };
        return (
          <Card
            key={event._id}
            eventID={event._id}
            imgsrc={event.background}
            eventData={eventData}
            onDelete={fetchEvents}
          ></Card>
        );
      })}
    </CardsOverviewContainer>
  );
}
