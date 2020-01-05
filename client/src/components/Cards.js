import React from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import { getOwnEvents } from "../api/event";
import UserContext from "../hooks/UserContext";

const CardsContainer = styled.div`
  margin-top: 10px;
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export default function Cards() {
  const [events, setEvents] = React.useState([]);
  const userName = React.useContext(UserContext);

  async function fetchEvents() {
    const result = await getOwnEvents(userName);
    setEvents(result);
  }

  React.useEffect(() => fetchEvents(), []);

  return (
    <CardsContainer>
      {events.map(event => {
        const eventDatas = { title: event.title, date: event.date, description: event.descr };
        return (
          <Card
            key={event._id}
            eventID={event._id}
            imgsrc={event.background}
            eventDatas={eventDatas}
            onDelete={fetchEvents}
          ></Card>
        );
      })}
    </CardsContainer>
  );
}
