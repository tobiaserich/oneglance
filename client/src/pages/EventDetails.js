import React from "react";
import styled from "@emotion/styled";
import { DetailEventContainer } from "../components/DetailContainer";
import { PagesContainer } from "../components/Container";
import { getOneEvent } from "../api/event";

const PageWrapper = styled(PagesContainer)`
  background-image: url(${({ img }) => `.${img}`});
  background-size: auto 100%;
  position: relative;
  overflow: hidden;
`;

export default function EventDetails() {
  const eventID = new URLSearchParams(window.location.search).get("ID");
  const [eventData, setEventData] = React.useState([]);

  async function fetchEvents() {
    const result = await getOneEvent(eventID);
    console.log(result);
    setEventData(result);
  }

  React.useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <PageWrapper img={eventData.background}>
      <DetailEventContainer>{eventData.title}</DetailEventContainer>
    </PageWrapper>
  );
}
