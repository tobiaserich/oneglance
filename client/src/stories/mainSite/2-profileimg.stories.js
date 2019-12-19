import React from "react";
import UserImg from "../../components/UserImg";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Main Page| header/Profile Image"
};

export function withoutUserImage() {
  return <UserImg />;
}

export function withUserImage() {
  return <UserImg src={text("ImgSrc:", "http://dogletter.com/images/strange-dog-main.jpg")} />;
}
