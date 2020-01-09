import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { addPoll } from "../api/poll";
import { AddContainer, FlexContainer } from "../components/Container";
import Label from "../components/Label";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { Headline } from "../components/Headline";

const FlexButton = styled(Button)`
  max-width: 25%;
  opacity: ${({ hide }) => (hide ? "0" : "1")};
  height: 25px;
  font-size: 16px;
  border: none;
  box-shadow: 0px 3px 10px #0000004d;
`;

const NewAnswerButton = styled(Button)`
  min-height: 30px;
  height: 30px;
  font-size: 16px;
  border: 0;
  box-shadow: 0px 3px 10px #0000004d;
  margin-bottom: 5px;
`;

const AnswerInput = styled(Input)`
  margin: auto;
  margin-top: 10px;
  height: 30px;
`;

export default function Poll() {
  const eventID = new URLSearchParams(window.location.search).get("ID");
  const [totalPoll, setTotalPoll] = React.useState([{ question: "", answers: [] }]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const history = useHistory();

  function setQuestion(value) {
    const poll = [...totalPoll];
    poll[currentQuestion].question = value;
    setTotalPoll(poll);
  }

  function setAnswer(value, index) {
    const poll = [...totalPoll];
    poll[currentQuestion].answers[index] = value;
    setTotalPoll(poll);
  }

  function handleQuestionClick(direction) {
    if (direction === "prev") {
      setCurrentQuestion(currentQuestion - 1);
    } else if (direction === "next") {
      const poll = [...totalPoll];
      const newQuestion = { question: "", answers: [] };
      poll.push(newQuestion);

      setTotalPoll(poll);
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function addAnswer() {
    const poll = [...totalPoll];
    poll[currentQuestion].answers.push("");
    setTotalPoll(poll);
  }

  function handleSubmit() {
    addPoll(totalPoll, eventID);
    history.push(`../eventDetails/?ID=${eventID}`);
  }
  return (
    <AddContainer>
      <Label>
        {currentQuestion > 0 ? (
          <Headline>Title</Headline>
        ) : (
          <>
            Title
            <Input align="center"></Input>
          </>
        )}
      </Label>
      <FlexContainer>
        {currentQuestion !== 0 ? (
          <FlexButton type="button" onClick={() => handleQuestionClick("prev")}>
            prev.
          </FlexButton>
        ) : (
          <FlexButton hide="true" type="button">
            x
          </FlexButton>
        )}

        <FlexButton
          type="button"
          disabled={totalPoll[currentQuestion].question ? false : true}
          onClick={() => handleQuestionClick("next")}
        >
          next
        </FlexButton>
      </FlexContainer>
      <Label>
        Question
        <Input
          height="30px"
          value={totalPoll[currentQuestion].question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        ></Input>
      </Label>
      <Label>
        Answers
        {totalPoll[currentQuestion].answers.map((answer, index) => (
          <AnswerInput
            key={index}
            value={totalPoll[currentQuestion].answers[index]}
            onChange={event => {
              setAnswer(event.target.value, index);
            }}
          ></AnswerInput>
        ))}
      </Label>

      <NewAnswerButton
        type="button"
        onClick={() => {
          addAnswer();
        }}
      >
        New answer
      </NewAnswerButton>
      <FlexContainer>
        <FlexButton type="button" onClick={() => history.push(`../eventDetails/?ID=${eventID}`)}>
          Discard
        </FlexButton>
        <FlexButton
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </FlexButton>
      </FlexContainer>
    </AddContainer>
  );
}
