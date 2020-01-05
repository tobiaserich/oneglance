import React from "react";
import { Button } from "../../components/Button";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Login Site|Input Buttons"
};

export function Buttons() {
  return (
    <>
      <div>As event manager</div>
      <Button>{text("Input Text", "Login as event manager")}</Button>
      <div>As user</div>
      <Button>{text("Input Text 2", "Login as user")}</Button>
    </>
  );
}
