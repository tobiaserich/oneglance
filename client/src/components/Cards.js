import React from "react";
import EventCard from "./EventCard";
import { getEvents } from "../api/event";
import UserContext from "../hooks/UserContext";
import { CardsOverviewContainer } from "../components/Container";

export default function Cards() {
  const [events, setEvents] = React.useState([]);
  const userName = React.useContext(UserContext);

  async function fetchEvents() {
    const result = await getEvents(userName);
    setEvents(result);
  }

  React.useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <CardsOverviewContainer>
      {events.map(event => {
        return <EventCard key={event._id} event={event} onDelete={fetchEvents} />;
      })}
    </CardsOverviewContainer>
  );
}
