import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PagesContainer } from "../components/Container";
import { Button } from "../components/Button";
import PopOver from "../components/PopOver";
import { Welcome, AppTitle } from "../components/Headline";

const HelperContainer = styled.div`
  height: 15%;
`;

const CustomLink = styled(Link)`
  width: 100%;
  text-align: center;
`;

export default function LoginPage({ auth }) {
  const [popOver, setPopOver] = React.useState(false);

  function togglePopOver() {
    if (!popOver) {
      setPopOver(true);
      setTimeout(() => {
        setPopOver(false);
      }, 1900);
    }
  }
  return (
    <PagesContainer>
      <HelperContainer />
      <AppTitle>oneGlance</AppTitle>
      <Welcome>Welcome</Welcome>
      <Welcome>User</Welcome>
      <HelperContainer />

      <CustomLink to="/overview">
        <Button onClick={() => auth("TobiasErich")}>Login as event manager</Button>
      </CustomLink>

      <Button onClick={togglePopOver}>Login as User</Button>
      {popOver && <PopOver size="medium">coming soon</PopOver>}
    </PagesContainer>
  );
}

LoginPage.propTypes = {
  auth: PropTypes.func
};
