import React from "react";

import LoginInput from "../../components/LoginInput";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "Login Site|Input fields",
  decorators: [withKnobs]
};

export function Input() {
  const loginType = { text: "text", password: "password" };
  return (
    <>
      <LoginInput type={select("type first", loginType, "text")} placeholder="inputfield" />
      <LoginInput type={select("type second", loginType, "password")} placeholder="inputfield" />
    </>
  );
}
