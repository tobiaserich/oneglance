import React from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import { getOwnEvents } from "../api/event";

const CardsContainer = styled.div`
  margin-top: 10px;
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export default function Cards() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    async function fetcher() {
      const results = await getOwnEvents("TobiasErich");
      setEvents(results);
      console.log(results);
    }
    fetcher();
  }, [events]);

  return (
    <CardsContainer>
      {events.map(event => {
        const eventDatas = { title: event.title, date: event.date, descrition: event.description };
        return <Card key={event._id} imgsrc={event.background} eventDatas={eventDatas}></Card>;
      })}
    </CardsContainer>
  );
}
