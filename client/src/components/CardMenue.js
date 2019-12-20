import React from "react";
import styled from "@emotion/styled";

const SideMenue = styled.div`
  background-size: 100% 100%;
  transform: translateZ(50%);
  height: 100%;
  width: 100px;
  background: #5193cae6;
  position: absolute;
  top: 0;
  right: 0px;
  border-radius: 0px 10px 10px 0px;
  z-index: 9010;
`;

const Exitbutton = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
  border: 1px solid ${props => props.theme.colors.darkfont};
  background: ${props => props.theme.colors.font};
`;

const ExitButtonLine = styled.div`
  width: 80%;
  height: 2px;
  background: ${props => props.theme.colors.darkfont};
  z-index: 9995;
  border-radius: 10px;
  ${props => {
    if (props.direction === "left") {
      return "transform: translateY(8px) translateX(2px) rotate(45deg)";
    } else {
      return "transform:translateY(6px) translateX(2px) rotate(-45deg) ";
    }
  }};
`;

const MenueItem = styled.div`
  margin-top: ${props => {
    return props.spacer;
  }};
  font-size: 16px;
  margin-left: 5px;
  color: ${props => props.theme.colors.font};
`;
export default function CardMenue() {
  return (
    <SideMenue>
      <Exitbutton>
        <ExitButtonLine direction="left"></ExitButtonLine>
        <ExitButtonLine direction="right"></ExitButtonLine>
      </Exitbutton>
      <MenueItem spacer="30px">Add users</MenueItem>
      <MenueItem>Delete user</MenueItem>
      <MenueItem spacer="40px">Settings</MenueItem>
    </SideMenue>
  );
}
