import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import UserContext from "../hooks/UserContext";
import { AddContainer } from "../components/Container";
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

export default function AddEvent() {
  const user = React.useContext(UserContext);
  const [title, setTitle] = React.useState("Event");
  const [date, setDate] = React.useState();
  const [descr, setDescr] = React.useState("");
  const [background, setBackground] = React.useState("./images/partyBG.webp");

  const history = useHistory();

  function changeHandler(typeOf, event) {
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
    setEvent(title, date, descr, background, user);
    setTimeout(() => {
      history.push("/overview");
    }, 20);
  }
  return (
    <AddContainer>
      <Label>
        Title
        <Input name="title" value={title} onChange={event => changeHandler("title", event)} />
      </Label>
      <Label>
        Date
        <DateInput name="date" type="date" onChange={event => changeHandler("date", event)} />
      </Label>
      <Label>
        Description
        <DescriptionInput
          name="description"
          value={descr}
          onChange={event => changeHandler("descr", event)}
        />
      </Label>
      <Label>
        Background image:
        <BackgroundSelect value={background} onChange={changeHandler} />
      </Label>
      <ButtonContainer>
        <LinkNoDeco to="/overview">
          <CardButton type="button">Cancel</CardButton>
        </LinkNoDeco>
        <CardButton onClick={event => handleSubmit(event)}>Submit</CardButton>
      </ButtonContainer>
    </AddContainer>
  );
}
