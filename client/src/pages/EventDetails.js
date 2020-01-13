import React from "react";
import styled from "@emotion/styled";
import { getOneEvent } from "../api/event";
import { PagesContainer } from "../components/Container";
import EventContent from "../components/EventContent";
import { EventContainer, FakeContainer } from "../components/DetailContainer";
import ExitButton from "../components/ExitButton";

const PageWrapper = styled(PagesContainer)`
  background-image: url(${({ img }) => `.${img}`});
  background-size: auto 100%;
  position: relative;
  overflow: hidden;
  animation-duration: 0.45s;
  animation-name: ease-in;
  @keyframes ease-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function EventDetails() {
  const eventID = new URLSearchParams(window.location.search).get("ID");
  const [eventData, setEventData] = React.useState([]);
  const [siteNumber, setSiteNumber] = React.useState(2);
  const [swipeDirection, setSwipeDirection] = React.useState("first-call");

  let swipeBegin = null;
  let swipeEnd = null;

  async function fetchEvents() {
    const result = await getOneEvent(eventID);
    setEventData(result);
  }

  function startAnimation() {
    setTimeout(() => {
      setSwipeDirection("none");
    }, 475);
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
      {swipeDirection === "left" || swipeDirection === "right" ? (
        <FakeContainer direction={swipeDirection} />
      ) : (
        <EventContainer
          onTouchStart={event => {
            handleSwipe(event, "begin");
          }}
          onTouchEnd={event => {
            handleSwipe(event, "end");
          }}
          direction={swipeDirection}
        >
          <ExitButton />
          <EventContent eventData={eventData} site={siteNumber} handleSwipe={handleSwipe} />
        </EventContainer>
      )}
    </PageWrapper>
  );
}
