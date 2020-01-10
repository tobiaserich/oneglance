import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { addPoll } from "../api/poll";
import { getPoll } from "../api/poll";
import { AddContainer, FlexContainer } from "../components/Container";
import Label from "../components/Label";
import Input, { EntryInput } from "../components/Input";
import { NewEntryButton, Button, FlexButton } from "../components/Button";
import { Headline } from "../components/Headline";

export default function Poll() {
  const eventID = new URLSearchParams(window.location.search).get("ID");
  const pollID = new URLSearchParams(window.location.search).get("poll");
  const [title, setTitle] = React.useState();
  const [totalPoll, setTotalPoll] = React.useState([{ question: "", answers: [] }]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const history = useHistory();

  React.useEffect(() => {
    async function fetchPoll() {
      const result = await getPoll(pollID);
      setTitle(result.title);
      setTotalPoll(result.poll);
    }
    fetchPoll();
  }, []);

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
    addPoll(totalPoll, eventID, title, pollID);
    history.push(`../eventDetails/?ID=${eventID}`);
  }
  return (
    <AddContainer>
      <Label>
        {currentQuestion > 0 ? (
          <Headline>{title}</Headline>
        ) : (
          <>
            Title
            <Input
              align="center"
              value={title}
              onChange={event => setTitle(event.target.value)}
            ></Input>
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
          <EntryInput
            key={index}
            value={totalPoll[currentQuestion].answers[index]}
            onChange={event => {
              setAnswer(event.target.value, index);
            }}
          ></EntryInput>
        ))}
      </Label>

      <NewEntryButton
        type="button"
        onClick={() => {
          addAnswer();
        }}
      >
        New answer
      </NewEntryButton>
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
