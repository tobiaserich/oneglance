import React from "react";
import styled from "@emotion/styled";
import UserImg from "../components/UserImg";
import UserContext from "../hooks/UserContext";
import LinkNoDeco from "./LinkNoDeco";

const HeaderContainer = styled.header`
  height: 10%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  color: ${({ theme }) => theme.colors.font};

  font-family: "Great Vibes";
  font-size: 35px;
  letter-spacing: 1px;
  box-shadow: 0px 5px 5px ${({ theme }) => theme.colors.font};
`;

const Spacer = styled.div`
  height: 4px;
  background-color: ${({ theme }) => theme.colors.background};
`;
const LogoWrapper = styled.div`
  margin: auto;
`;
export default function Header() {
  const userName = React.useContext(UserContext);
  return (
    <LinkNoDeco to="/">
      <HeaderContainer>
        <UserImg thread="header" username={userName} position="absolute" />
        <LogoWrapper>oneGlance</LogoWrapper>
      </HeaderContainer>
      <Spacer></Spacer>
    </LinkNoDeco>
  );
}
