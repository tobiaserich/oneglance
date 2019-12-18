import React from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/LoginInput";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "Login Site",
  decorators: [withKnobs]
};

export function Buttons() {
  return (
    <>
      <div>As event manager</div>
      <LoginButton>{text("Input Text", "Login as event manager")}</LoginButton>
      <div>As user</div>
      <LoginButton>{text("Input Text 2", "Login as user")}</LoginButton>
    </>
  );
}

export function Input() {
  const loginType = { text: "text", password: "password" };
  return (
    <>
      <LoginInput type={select("input", loginType, "text")} placeholder="inputfield" />
    </>
  );
}
