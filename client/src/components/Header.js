import React from "react";
import styled from "@emotion/styled";
import UserImg from "../components/UserImg";
import UserContext from "../hooks/UserContext";

const HeaderContainer = styled.header`
  height: 10%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundTransparent};
  color: ${({ theme }) => theme.colors.font};
  font-family: "Great Vibes";
  font-size: 35px;
  letter-spacing: 1px;
`;
const LogoWrapper = styled.div`
  margin: auto;
`;
export default function Header() {
  const userName = React.useContext(UserContext);
  return (
    <HeaderContainer>
      <UserImg thread="header" username={userName} position="absolute" />
      <LogoWrapper>oneGlance</LogoWrapper>
      <div></div>
    </HeaderContainer>
  );
}
