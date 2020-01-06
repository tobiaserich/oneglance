import React from "react";
import styled from "@emotion/styled";
import UserImg from "../components/UserImg";

const HeaderContainer = styled.header`
  height: 10%;
  width: 100%;
  position: ${({ pos }) => pos};
  top: 0;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.backgroundTransparent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.font};
  font-family: "Great Vibes";
  font-size: 35px;
  letter-spacing: 1px;
`;

export default function Header({ pos }) {
  return (
    <HeaderContainer pos={pos}>
      <UserImg thread="header" username="Tobias" />
      <div>oneGlance</div>
      <div></div>
    </HeaderContainer>
  );
}
