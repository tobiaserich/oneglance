import React from "react";
import EventCard from "./EventCard";
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

        return <EventCard key={event._id} event={event} onDelete={fetchEvents}></EventCard>;

      })}
    </CardsOverviewContainer>
  );
}
