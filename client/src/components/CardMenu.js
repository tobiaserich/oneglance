import React from "react";
import styled from "@emotion/styled";
import ExitButton from "./ExitButton";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import { deleteEvent } from "../api/event";

const SideMenu = styled.div`
  cursor: default;
  height: 100%;
  width: 100px;
  background: ${({ theme }) => theme.colors.backgroundTransparent};
  padding-left: 3px;
  position: absolute;
  top: 0;
  right: 0px;
  border-radius: 0px 10px 10px 0px;
  z-index: 8001;
  animation-duration: 0.5s;
  animation-name: ${({ animation }) => animation};

  @keyframes ease-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes ease-out {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  div {
    animation-duration: ${({ secondAnimation }) => {
      if (secondAnimation === "fading") {
        return "0.5s";
      } else {
        return "0.8s";
      }
    }};
    animation-name: ${({ secondAnimation }) => secondAnimation};

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fade-out {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes fading {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export default function Cardmenu({ onClick, eventID, onDelete, animationName, secondAnimation }) {
  const [subMenu, setSubMenu] = React.useState("main");

  async function clickHandler() {
    await deleteEvent(eventID);
    setTimeout(() => {
      onDelete();
    }, 100);
  }

  const menuContent = {
    main: (
      <>
        <MenuItem spacer={30}>Add users</MenuItem>
        <MenuItem spacer={0}>Delete user</MenuItem>
        <MenuItem spacer={40} target="settings" onClick={setSubMenu} animation={onClick}>
          Settings
        </MenuItem>
      </>
    ),
    settings: (
      <>
        <MenuItem
          spacer={40}
          onClick={() => {
            clickHandler();
            setSubMenu("main");
          }}
        >
          Delete event
        </MenuItem>
      </>
    )
  };

  return (
    <SideMenu animation={animationName} secondAnimation={secondAnimation}>
      <ExitButton onClick={onClick} />
      {menuContent[subMenu]}
    </SideMenu>
  );
}

Cardmenu.propTypes = {
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  eventID: PropTypes.string,
  animationName: PropTypes.string
};
