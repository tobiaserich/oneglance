import React from "react";
import CardMenue from "../../components/CardMenue";
import ExitButton from "../../components/ExitButton";
import MenueItem from "../../components/MenueItem";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Main Page|Card/Side Menue"
};

export function fullSideMenue() {
  return <CardMenue />;
}

export function exitButton() {
  return <ExitButton />;
}
