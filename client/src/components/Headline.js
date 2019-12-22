import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const H2 = styled.h2`
  font-weight: normal;
  color: ${props => props.theme.colors.font};
  position: relative;
  z-index: 8003;
  margin: 0px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 0;
  width: 98%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0px 0px 10px #262626;
  white-space: nowrap;
`;

export default function Headline({ eventName }) {
  return <H2>{eventName}</H2>;
}

Headline.propTypes = {
  eventName: PropTypes.string.isRequired
};
