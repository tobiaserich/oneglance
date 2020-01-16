import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { FlexContainer } from "../components/Container";
import { ArrowLeft, ArrowRight } from "../components/Button";

const Preview = styled.img`
  height: 80px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px #0000004d;
`;

export default function BackgroundSelect({ onChange }) {
  const [counter, setCounter] = React.useState(1);
  const [background, setBackground] = React.useState("./images/partyBG.webp");

  React.useEffect(() => {
    onChange("bg", null, background);
    // eslint-disable-next-line
  }, [background]);

  const backgrounds = [
    "./images/partyBG.webp",
    "./images/birthdayBG.webp",
    "./images/sportBG.webp",
    "./images/greenBG.webp",
    "./images/yellowBG.webp",
    "./images/fischeBG.webp"
  ];

  function handleClick(direction) {
    if (direction === "left") {
      if (counter === 0) {
        setCounter(5);
        setBackground(backgrounds[5]);
      } else {
        const newCounter = counter - 1;
        setCounter(newCounter);
        setBackground(backgrounds[newCounter]);
      }
    }

    if (direction === "right") {
      if (counter === 5) {
        setCounter(0);
        setBackground(backgrounds[0]);
      } else {
        const newCounter = counter + 1;
        setCounter(newCounter);
        setBackground(backgrounds[newCounter]);
      }
    }
  }

  return (
    <FlexContainer justify="center" align="center">
      <ArrowLeft onClick={() => handleClick("left")} />
      <Preview src={background} />
      <ArrowRight onClick={() => handleClick("right")} />
    </FlexContainer>
  );
}

BackgroundSelect.propTypes = {
  onChange: PropTypes.func
};
