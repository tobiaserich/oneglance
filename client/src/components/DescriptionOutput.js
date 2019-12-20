import React from "react";
import styled from "@emotion/styled";

const Description = styled.div`
  width: 96%;
  max-height: 45%;
  margin-top: 10px;
  margin-left: 10px;
  color: ${props => props.theme.colors.font};
  position: relative;
  text-shadow: 0px 0px 10px #262626;
  z-index: 9002;
  overflow: hidden;
`;

export default function DescriptionOutput(props) {
  return <Description>{props.children}</Description>;
}
