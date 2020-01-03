import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ClickContainer = styled.div`
  height: 18px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9005;
`;
const MenuButtonContainer = styled.div`
  width: 18px;
  height: 4px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MenuDots = styled.span`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background-color: white;
  z-index: 9004;
  border: 0.2px solid black;
`;

export default function MenuButton({ onClick }) {
  return (
    <ClickContainer
      onClick={() => {
        onClick(true);
      }}
    >
      <MenuButtonContainer>
        <MenuDots></MenuDots>
        <MenuDots></MenuDots>
        <MenuDots></MenuDots>
      </MenuButtonContainer>
    </ClickContainer>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func
};
