import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PagesContainer } from "../components/Container";
import { Button } from "../components/Button";

const HelperContainer = styled.div`
  height: 15%;
`;

const Welcome = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.font};
`;

const AppTitle = styled.h3`
  font-size: 30px;
  font-family: "Great Vibes";
  color: ${({ theme }) => theme.colors.font};
  margin: 5px;
`;
const CustomLink = styled(Link)`
  width: 100%;
  text-align: center;
`;
export default function LoginPage({ auth }) {
  return (
    <PagesContainer>
      <HelperContainer />
      <AppTitle>OneGlance</AppTitle>
      <Welcome>Welcome</Welcome>
      <Welcome>User</Welcome>
      <HelperContainer />

      <CustomLink to="/overview">
        <Button onClick={() => auth("TobiasErich")}>Login as event manager</Button>
      </CustomLink>

      <Button>Login as User</Button>
    </PagesContainer>
  );
}

LoginPage.propTypes = {
  auth: PropTypes.func
};
