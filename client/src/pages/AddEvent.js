import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { PagesContainer } from "../components/PagesContainer";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { DateInput } from "../components/DateInput";
import { DescriptionInput } from "../components/DescriptionInput";
import Button from "../components/Button";

const CardButton = styled(Button)`
  width: 100px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
export default function AddEvent() {
  return (
    <PagesContainer>
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
      <ButtonContainer>
        <CardButton>
          <CustomLink to="/overview">Cancel</CustomLink>
        </CardButton>
        <CardButton>Submit</CardButton>
      </ButtonContainer>
    </PagesContainer>
  );
}
