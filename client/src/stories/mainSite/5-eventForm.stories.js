import React from "react";
import styled from "@emotion/styled";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { DateInput } from "../../components/DateInput";
import { DescriptionInput } from "../../components/DescriptionInput";
import { Button } from "../../components/Button";

export default {
  title: "Add Event| Event Form "
};

const CardButton = styled(Button)`
  width: 100px;
  margin-left: 25px;
`;

export function fullForm() {
  return (
    <>
      <Label>
        Title
        <Input name="title" />
      </Label>

      <Label>
        Date
        <DateInput type="date" />
      </Label>

      <Label>
        Description
        <DescriptionInput />
      </Label>

      <CardButton>Cancel</CardButton>
      <CardButton>Submit</CardButton>
    </>
  );
}
