import React from "react";
import { useParams } from "react-router-dom";
import { getOneEvent } from "../api/event";
import { PageWrapper } from "../components/Container";
import EventContent from "../components/EventContent";
import { EventContainer, FakeContainer } from "../components/DetailContainer";
import ExitButton from "../components/ExitButton";
import DottedNavBar from "../components/DottedNavBar";

export default function EventDetails() {
  const { eventID } = useParams();
  const site = parseInt(sessionStorage.getItem(`siteNo`)) || 1;
  const [eventData, setEventData] = React.useState([]);
  const [siteNumber, setSiteNumber] = React.useState(site);
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
    const swipeX = event.screenX || event.changedTouches[0].screenX;
    if (task === "begin") {
      swipeBegin = swipeX;
    } else if (task === "end") {
      swipeEnd = swipeX;
      swipeCalc();
    }
  }

  function swipeCalc() {
    const swipeLength = 50;
    if (swipeBegin > swipeEnd + swipeLength && siteNumber < 3) {
      setSwipeDirection("left");
      const newNumber = siteNumber + 1;
      sessionStorage.setItem(`siteNo`, newNumber);
      setSiteNumber(newNumber);
      startAnimation();
    } else if (swipeBegin + swipeLength < swipeEnd && siteNumber > 0) {
      setSwipeDirection("right");
      const newNumber = siteNumber - 1;
      sessionStorage.setItem(`siteNo`, newNumber);
      setSiteNumber(newNumber);
      startAnimation();
    }
  }

  React.useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line
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
          onMouseDown={event => handleSwipe(event, "begin")}
          onMouseUp={event => handleSwipe(event, "end")}
          direction={swipeDirection}
        >
          <ExitButton eventID={eventID} />
          <EventContent eventData={eventData} site={siteNumber} />
        </EventContainer>
      )}
      <DottedNavBar contentNr={siteNumber} onClick={setSiteNumber} />
    </PageWrapper>
  );
}
