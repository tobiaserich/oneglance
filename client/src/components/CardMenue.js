import React from "react";
import styled from "@emotion/styled";
import ExitButton from "./ExitButton";
import MenueItem from "./MenueItem";

const SideMenue = styled.div`
  background-size: 100% 100%;
  transform: translateZ(50%);
  height: 100%;
  width: 100px;
  background: ${props => props.theme.colors.backgroundTransparent};
  position: absolute;
  top: 0;
  right: 0px;
  border-radius: 0px 10px 10px 0px;
  z-index: 9010;
`;

export default function CardMenue() {
  return (
    <SideMenue>
      <ExitButton />
      <MenueItem spacer={30}>Add users</MenueItem>
      <MenueItem spacer={0}>Delete user</MenueItem>
      <MenueItem spacer={40}>Settings</MenueItem>
    </SideMenue>
  );
}
