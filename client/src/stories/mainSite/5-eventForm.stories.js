import React from "react";
import styled from "@emotion/styled";
import { AddEventCard } from "../../components/AddEventCard";
import Label from "../../components/Label";
import Input from "../../components/Input";
import { DateInput } from "../../components/DateInput";
import { DescriptionInput } from "../../components/DescriptionInput";
import LoginButton from "../../components/LoginButton";

export default {
  title: "Add Event| Event Form "
};

const Button = styled(LoginButton)`
  width: 100px;
  margin-left: 25px;
`;

export function fullForm() {
  return (
    <AddEventCard>
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

      <Button>Cancel</Button>
      <Button>Submit</Button>
    </AddEventCard>
  );
}

export function Card() {
  return <AddEventCard></AddEventCard>;
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
