import React from "react";
import styled from "@emotion/styled";
import ExitButton from "./ExitButton";
import MenuItem from "./MenuItem";

const SideMenu = styled.div`
  background-size: 100% 100%;
  transform: translateZ(50%);
  height: 100%;
  width: 100px;
  background: ${({ theme }) => theme.colors.backgroundTransparent};
  position: absolute;
  top: 0;
  right: 0px;
  border-radius: 0px 10px 10px 0px;
  z-index: 9010;
`;

export default function Cardmenu() {
  return (
    <SideMenu>
      <ExitButton />
      <MenuItem spacer={30}>Add users</MenuItem>
      <MenuItem spacer={0}>Delete user</MenuItem>
      <MenuItem spacer={40}>Settings</MenuItem>
    </SideMenu>
  );
}
