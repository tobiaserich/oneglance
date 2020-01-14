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

export default function Card({ event, onDelete }) {
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
    <CardContainer background={event.background}>
      <LinkNoDeco to={`/eventDetails/?ID=${event._id}`}>
        <DarkFilter />
        <Headline>{event.title || "Event"}</Headline>
        <DateOutput>{event.date}</DateOutput>
        <DescriptionOutput>{event.descr}</DescriptionOutput>
      </LinkNoDeco>
      {menuVisibility ? (
        <CardMenu
          onClick={clickHandler}
          eventID={event._id}
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
  event: PropTypes.object,
  onDelete: PropTypes.func
};
