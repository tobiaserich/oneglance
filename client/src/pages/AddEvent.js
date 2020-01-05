import React from "react";
import styled from "@emotion/styled";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../hooks/UserContext";
import { AddContainer } from "../components/AddEventContainer";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { DateInput } from "../components/DateInput";
import { DescriptionInput } from "../components/DescriptionInput";
import { Button } from "../components/Button";
import BackgroundSelect from "../components/BackgroundSelect";
import { setEvent } from "../api/event";
const CardButton = styled(Button)`
  width: 100px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

export default function AddEvent() {
  const user = React.useContext(UserContext);
  const [title, setTitle] = React.useState("Event");
  const [date, setDate] = React.useState();
  const [descr, setDescr] = React.useState("");
  const [background, setBackground] = React.useState("./images/partyBG.png");

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
        <CardButton>
          <CustomLink to="/overview">Cancel</CustomLink>
        </CardButton>
        <CardButton
          onClick={() => {
            setEvent(title, date, descr, background, user);
            history.push("/overview");
          }}
        >
          Submit
        </CardButton>
      </ButtonContainer>
    </AddContainer>
  );
}
