import React from "react";
import styled from "@emotion/styled";
import { getOneEvent } from "../api/event";
import { PagesContainer } from "../components/Container";
import EventContent from "../components/EventContent";
import { EventContainer, FakeEvent } from "../components/DetailContainer";
import ExitButton from "../components/ExitButton";

const PageWrapper = styled(PagesContainer)`
  background-image: url(${({ img }) => `.${img}`});
  background-size: auto 100%;
  position: relative;
  overflow: hidden;
`;

export default function EventDetails() {
  const eventID = new URLSearchParams(window.location.search).get("ID");
  const [eventData, setEventData] = React.useState([]);
  const [siteNumber, setSiteNumber] = React.useState(3);
  const [swipeDirection, setSwipeDirection] = React.useState(null);
  const [animationBegin, setAnimationBegin] = React.useState(false);

  let swipeBegin = null;
  let swipeEnd = null;

  async function fetchEvents() {
    const result = await getOneEvent(eventID);
    setEventData(result);
  }

  function startAnimation() {
    setAnimationBegin(true);
    setTimeout(() => {
      setAnimationBegin(false);
    }, 500);
  }
  function handleSwipe(event, task) {
    const swipeX = event.changedTouches[0].screenX;
    if (task === "begin") {
      swipeBegin = swipeX;
    } else if (task === "end") {
      swipeEnd = swipeX;
      swipeCalc();
    }
  }

  function swipeCalc() {
    if (swipeBegin > swipeEnd + 100 && siteNumber < 3) {
      setSwipeDirection("left");
      const newNumber = siteNumber + 1;
      setSiteNumber(newNumber);
      startAnimation();
    } else if (swipeBegin + 100 < swipeEnd && siteNumber > 0) {
      setSwipeDirection("right");
      const newNumber = siteNumber - 1;
      setSiteNumber(newNumber);
      startAnimation();
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
          onTouchEnd={event => {
            handleSwipe(event, "end");
          }}
        >
          <ExitButton />
          <EventContent eventData={eventData} site={siteNumber} handleSwipe={handleSwipe} />
        </EventContainer>
      )}
    </PageWrapper>
  );
}
