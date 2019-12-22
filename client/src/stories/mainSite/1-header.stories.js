import React from "react";
import HeaderContainer from "../../components/Header";
import UserImg from "../../components/UserImg";
export default {
  title: "Main Page| Header"
};

export function fullHeader() {
  return (
    <HeaderContainer>
      <UserImg />
      <div>Logo</div>
      <div></div>
    </HeaderContainer>
  );
}

export function header() {
  return <HeaderContainer></HeaderContainer>;
}
