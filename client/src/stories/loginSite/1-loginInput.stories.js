import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import LoginInput from "../../components/LoginInput";
import Label from "../../components/Label";
export default {
  title: "Login Site|Input fields",
  decorators: [withKnobs]
};

export function Input() {
  const loginType = { text: "text", password: "password" };
  return (
    <>
      <Label>
        UserInput
        <LoginInput type={select("type first", loginType, "text")} placeholder="inputfield" />
      </Label>
      <Label>
        PasswordInput
        <LoginInput type={select("type second", loginType, "password")} placeholder="inputfield" />
      </Label>
    </>
  );
}
