import React from "react";
import PropTypes from "prop-types";
import { CardContainer } from "./Container";
import { Headline } from "./Headline";
import { DateOutput } from "./DateOutput";
import { DescriptionOutput } from "./DescriptionOutput";
import MenuButton from "./MenuButton";
import CardMenu from "./CardMenu";
import LinkNoDeco from "./LinkNoDeco";
import DarkFilter from "./DarkFilter";

export default function Card({ event, onDelete }) {
  const [menuVisibility, setMenuVisibility] = React.useState(false);
  const [firstAnimation, setFirstAnimation] = React.useState("none");
  const [secondAnimation, setSecondAnimation] = React.useState("none");

  function clickHandler(stateValue, animationOne, animationTwo) {
    if (stateValue) {
      setMenuVisibility(stateValue);
      setFirstAnimation(animationOne);
      setSecondAnimation(animationTwo);
    } else {
      setTimeout(() => setMenuVisibility(stateValue), 500);
      setFirstAnimation(animationOne);
      setSecondAnimation(animationTwo);
    }
  }

  return (
    <CardContainer background={event.background}>
      <LinkNoDeco to={`/eventDetails/${event._id}`}>
        <DarkFilter />
        <Headline>{event.title}</Headline>
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
