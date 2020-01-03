import React from "react";
import styled from "@emotion/styled";
import ExitButton from "./ExitButton";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import { deleteEvent } from "../api/event";

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

export default function Cardmenu({ onClick, eventID, events }) {
  const [subMenu, setSubMenu] = React.useState("main");

  const menuContent = {
    main: (
      <>
        <MenuItem spacer={30}>Add users</MenuItem>
        <MenuItem spacer={0}>Delete user</MenuItem>
        <MenuItem spacer={40} target="settings" onClick={setSubMenu}>
          Settings
        </MenuItem>
      </>
    ),
    settings: (
      <>
        <MenuItem
          spacer={40}
          onClick={() => {
            deleteEvent(eventID);
            setSubMenu("main");
            events([]);
          }}
        >
          Delete event
        </MenuItem>
      </>
    )
  };

  return (
    <SideMenu>
      <ExitButton onClick={onClick} />
      {menuContent[subMenu]}
    </SideMenu>
  );
}

Cardmenu.propTypes = {
  onClick: PropTypes.func
};
