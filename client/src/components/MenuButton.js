import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ClickContainer } from "./Container";

const MenuButtonContainer = styled.div`
  width: 18px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

const MenuDots = styled.span`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.active};
  border: 0.2px solid black;
`;

export default function MenuButton({ onClick }) {
  return (
    <ClickContainer
      onClick={() => {
        onClick(true, "ease-in", "fade-in");
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
