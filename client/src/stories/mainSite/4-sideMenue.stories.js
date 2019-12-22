import React from "react";
import CardMenu from "../../components/CardMenu";
import ExitButton from "../../components/ExitButton";

export default {
  title: "Main Page|Card/Side menu"
};

export function fullSideMenu() {
  return <CardMenu />;
}

export function exitButton() {
  return <ExitButton />;
}
