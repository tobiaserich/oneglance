import React from "react";
import styled from "@emotion/styled";

const MenueButtonContainer = styled.div`
  width: 18px;
  height: 4px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MenueDots = styled.span`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background-color: white;
  z-index: 9004;
  border: 0.2px solid black;
`;

export default function MenueButton() {
  return (
    <MenueButtonContainer>
      <MenueDots></MenueDots>
      <MenueDots></MenueDots>
      <MenueDots></MenueDots>
    </MenueButtonContainer>
  );
}
