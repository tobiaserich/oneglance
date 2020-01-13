import React from "react";
import PropTypes from "prop-types";
import { CardContainer } from "../components/Container";
import { Headline } from "../components/Headline";
import { DateOutput } from "../components/DateOutput";
import { DescriptionOutput } from "../components/DescriptionOutput";
import MenuButton from "./MenuButton";
import CardMenu from "./CardMenu";
import LinkNoDeco from "./LinkNoDeco";
import DarkFilter from "../components/DarkFilter";

export default function Card({ imgsrc, eventData, eventID, onDelete }) {
  const [menuVisibility, setMenuVisibility] = React.useState(false);
  const [firstAnimation, setFirstAnimation] = React.useState("none");
  const [secondAnimation, setSecondAnimation] = React.useState("none");

  function clickHandler(stateValue, firstAnimation, secondAnimation) {
    stateValue
      ? setMenuVisibility(stateValue)
      : setTimeout(() => setMenuVisibility(stateValue), 500);
    setFirstAnimation(firstAnimation);
    setSecondAnimation(secondAnimation);
  }

  return (
    <CardContainer imgsrc={imgsrc}>
      <LinkNoDeco to={`/eventDetails/?ID=${eventID}`}>
        <DarkFilter />
        <Headline>{eventData.title || "Event"}</Headline>
        <DateOutput>{eventData.date}</DateOutput>
        <DescriptionOutput>{eventData.description}</DescriptionOutput>
      </LinkNoDeco>
      {menuVisibility ? (
        <CardMenu
          onClick={clickHandler}
          eventID={eventID}
          onDelete={onDelete}
          animationName={firstAnimation}
          secondAnimation={secondAnimation}
        />
      ) : (
        <MenuButton onClick={clickHandler} />
      )}
    </CardContainer>
  );
}

Card.propTypes = {
  imgsrc: PropTypes.string,
  eventData: PropTypes.object,
  eventID: PropTypes.string,
  onDelete: PropTypes.func
};
