import React from "react";
import styled from "@emotion/styled";
import { useHistory, useParams } from "react-router-dom";
import { addPoll } from "../api/poll";
import { getPoll } from "../api/poll";
import { AddContainer, FlexContainer } from "../components/Container";
import Label from "../components/Label";
import { Input, EntryInput } from "../components/Input";
import { NewEntryButton, FlexButton } from "../components/Button";
import { Headline } from "../components/Headline";
import { ArrowLeft, ArrowRight } from "../components/Button";

const Spacer = styled.div`
  height: ${({ height }) => height};
`;

export default function Poll() {
  const { eventID } = useParams();
  const { pollID } = useParams();
  const [title, setTitle] = React.useState("");
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
    // eslint-disable-next-line
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
    history.push(`/eventDetails/${eventID}`);
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
              margin="5px"
            ></Input>
          </>
        )}
      </Label>
      {currentQuestion !== 0 ? <Spacer height="29px" /> : ""}
      <FlexContainer align="center">
        {currentQuestion !== 0 ? (
          <ArrowLeft
            marginTop="35px"
            marginLeft="15px"
            onClick={() => handleQuestionClick("prev")}
          />
        ) : (
          <ArrowLeft hide="true" mmarginTop="35px" marginLeft="15px" />
        )}
        <Label>
          Question
          <Input
            height="30px"
            value={totalPoll[currentQuestion].question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
            margin="5px"
          ></Input>
        </Label>
        <ArrowRight
          onClick={() => (totalPoll[currentQuestion].question ? handleQuestionClick("next") : "")}
          marginTop="35px"
          marginRight="15px"
          marginLeft="0px"
        />
      </FlexContainer>
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
        <FlexButton type="button" onClick={() => history.push(`/eventDetails/${eventID}`)}>
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
