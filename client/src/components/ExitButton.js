import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const ExitButtonContainer = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.darkfont};
  background: ${({ theme }) => theme.colors.active};
`;

const ExitButtonLine = styled.div`
  width: 80%;
  height: 2px;
  z-index: 8001;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.darkfont};
  ${({ direction }) => {
    if (direction === "left") {
      return "transform: translateY(8px) translateX(2px) rotate(45deg)";
    } else {
      return "transform:translateY(6px) translateX(2px) rotate(-45deg) ";
    }
  }};
`;

export default function ExitButton({ onClick }) {
  const history = useHistory();
  function handleClick() {
    if (onClick) {
      onClick(false, "ease-out", "fade-out");
    } else {
      history.push("/overview");
    }
  }
  return (
    <ExitButtonContainer onClick={() => handleClick()}>
      <ExitButtonLine direction="left"></ExitButtonLine>
      <ExitButtonLine direction="right"></ExitButtonLine>
    </ExitButtonContainer>
  );
}

ExitButton.propTypes = {
  onClick: PropTypes.func
};
