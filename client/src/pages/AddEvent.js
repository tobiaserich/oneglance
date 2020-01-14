import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import UserContext from "../hooks/UserContext";
import { AddContainer, FlexContainer } from "../components/Container";
import Label from "../components/Label";
import Input from "../components/Input";
import DateInput from "../components/DateInput";
import { DescriptionInput } from "../components/DescriptionInput";
import { Button } from "../components/Button";
import BackgroundSelect from "../components/BackgroundSelect";
import LinkNoDeco from "../components/LinkNoDeco";
import { setEvent } from "../api/event";

const CardButton = styled(Button)`
  margin: 0;
  width: 100px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;

const Preview = styled.img`
  height: 80px;
  margin-top: 10px;
  border-radius: 10px;
`;
export default function AddEvent() {
  const user = React.useContext(UserContext);
  const [title, setTitle] = React.useState("Event");
  const [date, setDate] = React.useState();
  const [descr, setDescr] = React.useState("");
  const [background, setBackground] = React.useState("./images/partyBG.webp");

  const history = useHistory();

  function handleChange(typeOf, event) {
    const content = event.target.value;
    if (typeOf === "title") {
      setTitle(content);
    } else if (typeOf === "date") {
      setDate(content);
    } else if (typeOf === "descr") {
      setDescr(content);
    } else if (typeOf === "bg") {
      setBackground(content);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEvent({ title, date, descr, background, owner: user });
    setTimeout(() => {
      history.push("/overview");
    }, 20);
  }
  return (
    <AddContainer>
      <Label>
        Title
        <Input name="title" value={title} onChange={event => handleChange("title", event)} />
      </Label>
      <Label>
        Date
        <DateInput name="date" type="date" onChange={event => handleChange("date", event)} />
      </Label>
      <Label>
        Description
        <DescriptionInput
          name="description"
          value={descr}
          onChange={event => handleChange("descr", event)}
        />
      </Label>
      <Label>
        Background image:
        <FlexContainer align="center" width="80%">
          <BackgroundSelect value={background} onChange={handleChange} />
          <Preview src={background} />
        </FlexContainer>
      </Label>
      <ButtonContainer>
        <LinkNoDeco to="/overview">
          <CardButton type="button">Cancel</CardButton>
        </LinkNoDeco>
        <CardButton onClick={handleSubmit}>Submit</CardButton>
      </ButtonContainer>
    </AddContainer>
  );
}
