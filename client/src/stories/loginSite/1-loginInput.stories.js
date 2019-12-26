import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
export default {
  title: "Login Site|Input fields",
  decorators: [withKnobs]
};

export function input() {
  const loginType = { text: "text", password: "password" };
  return (
    <>
      <Label>
        UserInput
        <Input
          type={select("type first", loginType, "text")}
          placeholder="inputfield"
          name="UserName"
        />
      </Label>
      <Label>
        PasswordInput
        <Input
          type={select("type second", loginType, "password")}
          placeholder="inputfield"
          name="password"
        />
      </Label>
    </>
  );
}
