import React from "react";
import styled from "@emotion/styled";

import { AddCard } from "../../components/AddEventCard";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { DateInput } from "../../components/DateInput";
import { DescriptionInput } from "../../components/DescriptionInput";
import Button from "../../components/Button";

export default {
  title: "Add Event| Event Form "
};

const CardButton = styled(Button)`
  width: 100px;
  margin-left: 25px;
`;

export function fullForm() {
  return (
    <AddCard>
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
    </AddCard>
  );
}

export function Card() {
  return <AddCard></AddCard>;
}

export function dateInput() {
  return <DateInput type="date" />;
}
export function descriptionInput() {
  return <DescriptionInput />;
}

export function Buttons() {
  return (
    <>
      <Button>Cancel</Button>
      <Button>Submit</Button>
    </>
  );
}
