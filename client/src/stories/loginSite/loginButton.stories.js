import React from "react";
import LoginButton from "../../components/LoginButton";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Login Site|Input Buttons"
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
