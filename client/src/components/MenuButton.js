import React from "react";
import styled from "@emotion/styled";

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

export default function menuButton() {
  return (
    <MenuButtonContainer>
      <MenuDots></MenuDots>
      <MenuDots></MenuDots>
      <MenuDots></MenuDots>
    </MenuButtonContainer>
  );
}
