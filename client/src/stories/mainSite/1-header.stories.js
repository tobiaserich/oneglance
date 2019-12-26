import React from "react";
import { text } from "@storybook/addon-knobs";
import HeaderContainer from "../../components/Header";
import UserImg from "../../components/UserImg";

export default {
  title: "Main Page| Header"
};

export function fullHeader() {
  return (
    <HeaderContainer>
      <UserImg username={text("Username", "Heidi")} thread="header" />
      <div>Logo</div>
      <div></div>
    </HeaderContainer>
  );
}

export function header() {
  return <HeaderContainer></HeaderContainer>;
}
