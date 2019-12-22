import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Headline from "../components/Headline";
import DateOutput from "../components/DateOutput";
import DescriptionOutput from "../components/DescriptionOutput";
import { MenueButton } from "./CardMenueButton";
import CardMenue from "./CardMenue";

const CardContainer = styled.article`
  height: 140px;
  width: 280px;
  background-image: url(${({ imgsrc }) => imgsrc});
  background-size: 100% 100%;
  border-radius: 10px;
  position: relative;
  z-index: 8001;
  overflow: hidden;
`;

const CardDarkFilter = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 8002;
  background: #0000004d;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export default function Card({ imgsrc, eventDatas, menueOn }) {
  return (
    <CardContainer imgsrc={imgsrc}>
      <CardDarkFilter />
      <Headline eventName={eventDatas.title ? eventDatas.title : "Event"} />
      <DateOutput date={eventDatas.date} />
      <DescriptionOutput>{eventDatas.description}</DescriptionOutput>$
      {menueOn ? <CardMenue /> : <MenueButton />}
    </CardContainer>
  );
}

Card.propTypes = {
  imgsrc: PropTypes.string,
  eventDatas: PropTypes.object,
  menueOn: PropTypes.bool
};
