import React from "react";
import styled from "@emotion/styled";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";

import DateInput from "../../components/DateInput";
import { Headline } from "../../components/Headline";
import { Button } from "../../components/Button";
export default {
  title: "Main Page| Add Pages"
};

const CardTitle = styled(Headline)`
  padding-top: 10px;
  text-align: center;
`;

const CardButton = styled(Button)`
  width: 100px;
  margin: 150px 20px;
`;

export function AddPollDetails() {
  return (
    <>
      <CardTitle>Add Poll</CardTitle>
      <Label>
        Title:
        <Input type="text" />
      </Label>
      <Label>
        Expiration date:
        <DateInput type="date" />
        <CardButton>Cancel</CardButton>
        <CardButton type="submit">Continue</CardButton>
      </Label>
    </>
  );
}
