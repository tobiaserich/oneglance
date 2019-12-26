import React from "react";
import UserImg from "../../components/UserImg";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Main Page| Header/Profile Image"
};

export function withoutUserImage() {
  return <UserImg username="you" thread="header" />;
}

export function withUserImage() {
  return (
    <UserImg
      src={text("ImgSrc:", "http://dogletter.com/images/strange-dog-main.jpg")}
      username="you"
      thread="header"
    />
  );
}
