import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { PagesContainer } from "../components/PagesContainer";
import { Button } from "../components/Button";

const HelperContainer = styled.div`
  height: 15%;
`;

const Welcome = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.font};
`;

const CustomLink = styled(Link)`
  width: 100%;
  text-align: center;
`;
export default function LoginPage(props) {
  return (
    <PagesContainer>
      <HelperContainer />
      <h3>OneGlance</h3>
      <Welcome>Welcome</Welcome>
      <Welcome>User</Welcome>
      <HelperContainer />

      <CustomLink to="/overview">
        <Button onClick={() => props.auth("TobiasErich")}>Login as event manager</Button>
      </CustomLink>

      <Button>Login as User</Button>
    </PagesContainer>
  );
}
