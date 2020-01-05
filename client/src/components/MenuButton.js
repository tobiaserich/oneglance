import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ClickContainer = styled.div`
  height: 25px;
  width: 35px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  z-index: 8001;
`;
const MenuButtonContainer = styled.div`
  width: 18px;
  display: flex;
  justify-content: space-around;
`;

const MenuDots = styled.span`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background-color: white;
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
