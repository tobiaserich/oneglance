import React from "react";
import styled from "@emotion/styled";
import UserImg from "../components/UserImg";
import UserContext from "../hooks/UserContext";

const HeaderContainer = styled.header`
  height: 10%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundTransparent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.font};
  font-family: "Great Vibes";
  font-size: 35px;
  letter-spacing: 1px;
`;

export default function Header() {
  const userName = React.useContext(UserContext);
  return (
    <HeaderContainer>
      <UserImg thread="header" username={userName} />
      <div>oneGlance</div>
      <div></div>
    </HeaderContainer>
  );
}
