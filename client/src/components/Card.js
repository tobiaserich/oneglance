import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CardContainer } from "../components/Container";
import { Headline } from "../components/Headline";
import { DateOutput } from "../components/DateOutput";
import { DescriptionOutput } from "../components/DescriptionOutput";
import MenuButton from "./MenuButton";
import CardMenu from "./CardMenu";
import DarkFilter from "../components/DarkFilter";

const CustomLink = styled(Link)`
  text-decoration: none;
`;

export default function Card({ imgsrc, eventData, eventID, onDelete }) {
  const [menuVisibility, setMenuVisibility] = React.useState(false);

  return (
    <CardContainer imgsrc={imgsrc}>
      <CustomLink to={`/eventDetails/?ID=${eventID}`}>
        <DarkFilter />
        <Headline>{eventData.title || "Event"}</Headline>
        <DateOutput>{eventData.date}</DateOutput>
        <DescriptionOutput>{eventData.description}</DescriptionOutput>
      </CustomLink>
      {menuVisibility ? (
        <CardMenu onClick={setMenuVisibility} eventID={eventID} onDelete={onDelete} />
      ) : (
        <MenuButton onClick={setMenuVisibility} />
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
