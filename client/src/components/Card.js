import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Headline } from "../components/Headline";
import { DateOutput } from "../components/DateOutput";
import { DescriptionOutput } from "../components/DescriptionOutput";
import MenuButton from "./MenuButton";
import CardMenu from "./CardMenu";
import { DarkFilter } from "../components/DarkFilter";

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
const CardContainer = styled.article`
  height: 140px;
  width: 280px;
  background-image: url(${({ imgsrc }) => imgsrc});
  background-size: 100% 100%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: auto;
  margin-top: 20px;
`;

export default function Card({ imgsrc, eventDatas, eventID, onDelete }) {
  const [menuVisibility, setMenuVisibility] = React.useState(false);
  return (
    <CardContainer imgsrc={imgsrc} color={menuVisibility}>
      <CustomLink to="/eventDetails">
        <DarkFilter />
        <Headline>{eventDatas.title ? eventDatas.title : "Event"}</Headline>
        <DateOutput>{eventDatas.date}</DateOutput>
        <DescriptionOutput>{eventDatas.description}</DescriptionOutput>
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
  eventDatas: PropTypes.object,
  eventID: PropTypes.string,
  onDelete: PropTypes.func
};

//eventDatas : title, date, descripiton
