import React from "react";
import styled from "@emotion/styled";
import { getOneEvent } from "../api/event";
import { PagesContainer } from "../components/Container";
import EventContent from "../components/EventContent";
import { EventContainer, FakeEvent } from "../components/DetailContainer";

const PageWrapper = styled(PagesContainer)`
  background-image: url(${({ img }) => `.${img}`});
  background-size: auto 100%;
  position: relative;
  overflow: hidden;
`;

export default function EventDetails() {
  const eventID = new URLSearchParams(window.location.search).get("ID");
  const [eventData, setEventData] = React.useState([]);
  const [swipeBegin, setSwipeBegin] = React.useState();
  const [swipeEnd, setSwipeEnd] = React.useState();
  const [swipeDirection, setSwipeDirection] = React.useState(null);
  const [siteNumber, setSiteNumber] = React.useState(1);
  const [animationBegin, setAnimationBegin] = React.useState(false);

  async function fetchEvents() {
    const result = await getOneEvent(eventID);
    setEventData(result);
  }

  function handleSwipe(event, task) {
    const swipeX = event.changedTouches[0].screenX;
    if (task === "begin") {
      setSwipeBegin(swipeX);
    } else if (task === "move") {
      setSwipeEnd(swipeX);
    } else if (task === "end") {
      swipeCalc();
      setAnimationBegin(true);
      console.log(swipeDirection);
      setTimeout(() => {
        setAnimationBegin(false);
      }, 500);
    }
  }

  function swipeCalc() {
    if (swipeBegin > swipeEnd + 50) {
      setSwipeDirection("left");
      setSiteNumber(1);
    } else if (swipeBegin + 50 < swipeEnd) {
      setSwipeDirection("right");
      setSiteNumber(0);
    }
  }
  React.useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <PageWrapper img={eventData.background}>
      {animationBegin ? (
        <FakeEvent direction={swipeDirection} />
      ) : (
        <EventContainer
          onTouchStart={event => {
            handleSwipe(event, "begin");
          }}
          onTouchMove={event => {
            handleSwipe(event, "move");
          }}
          onTouchEnd={event => {
            handleSwipe(event, "end");
          }}
        >
          <EventContent eventData={eventData} site={siteNumber} handleSwipe={handleSwipe} />
        </EventContainer>
      )}
    </PageWrapper>
  );
}
