import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Headline from "../components/Headline";
import DateOutput from "../components/DateOutput";
import DescriptionOutput from "../components/DescriptionOutput";
import MenueButton from "./MenueButton";
import CardMenue from "./CardMenue";
import DarkFilter from "../components/DarkFilter";

const CardContainer = styled.article`
  height: 140px;
  width: 280px;
  background-image: url(${props => props.imgsrc});
  background-size: 100% 100%;
  border-radius: 10px;
  position: relative;
  z-index: 8001;
  overflow: hidden;
`;

export default function Card({ imgsrc, eventDatas, menueOn }) {
  return (
    <CardContainer imgsrc={imgsrc}>
      <DarkFilter />
      <Headline eventName={eventDatas.title ? eventDatas.title : "Event"} />
      <DateOutput date={eventDatas.date} />
      <DescriptionOutput>{eventDatas.description}</DescriptionOutput>
      {menueOn ? <CardMenue /> : <MenueButton />}
    </CardContainer>
  );
}

Card.propTypes = {
  imgsrc: PropTypes.string,
  eventDatas: PropTypes.object,
  menueOn: PropTypes.bool
};
