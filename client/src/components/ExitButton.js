import React from "react";
import styled from "@emotion/styled";

const ExitButtonContainer = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
  border: 1px solid ${props => props.theme.colors.darkfont};
  background: ${props => props.theme.colors.font};
`;

const ExitButtonLine = styled.div`
  width: 80%;
  height: 2px;
  background: ${props => props.theme.colors.darkfont};
  z-index: 9995;
  border-radius: 10px;
  ${props => {
    if (props.direction === "left") {
      return "transform: translateY(8px) translateX(2px) rotate(45deg)";
    } else {
      return "transform:translateY(6px) translateX(2px) rotate(-45deg) ";
    }
  }};
`;

export default function ExitButton() {
  return (
    <ExitButtonContainer>
      <ExitButtonLine direction="left"></ExitButtonLine>
      <ExitButtonLine direction="right"></ExitButtonLine>
    </ExitButtonContainer>
  );
}
