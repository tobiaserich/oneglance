import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ExitButtonContainer = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
  border: 1px solid ${({ theme }) => theme.colors.darkfont};
  background: ${({ theme }) => theme.colors.font};
`;

const ExitButtonLine = styled.div`
  width: 80%;
  height: 2px;
  background: ${({ theme }) => theme.colors.darkfont};
  z-index: 9995;
  border-radius: 10px;
  ${({ direction }) => {
    if (direction === "left") {
      return "transform: translateY(8px) translateX(2px) rotate(45deg)";
    } else {
      return "transform:translateY(6px) translateX(2px) rotate(-45deg) ";
    }
  }};
`;

export default function ExitButton({ onClick }) {
  return (
    <ExitButtonContainer
      onClick={() => {
        onClick(false);
      }}
    >
      <ExitButtonLine direction="left"></ExitButtonLine>
      <ExitButtonLine direction="right"></ExitButtonLine>
    </ExitButtonContainer>
  );
}

ExitButton.propTypes = {
  onClick: PropTypes.func
};
