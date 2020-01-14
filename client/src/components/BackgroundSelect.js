import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { FlexContainer } from "../components/Container";

const ArrowLeft = styled.div`
  height: 0;
  width: 0;
  margin-top: 10px;
  margin-right: 5px;
  border-right: 15px solid white;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;

const ArrowRight = styled.div`
  height: 0px;
  width: 0px;
  margin-top: 10px;
  margin-left: 5px;
  border-left: 15px solid white;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;

const Preview = styled.img`
  height: 80px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px #0000004d;
`;

export default function BackgroundSelect({ value, onChange }) {
  const [counter, setCounter] = React.useState(1);
  const [background, setBackground] = React.useState("./images/partyBG.webp");

  React.useEffect(() => {
    onChange("bg", null, background);
  }, [background]);

  const backgrounds = [
    "./images/partyBG.webp",
    "./images/birthdayBG.webp",
    "./images/sportBG.webp",
    "./images/greenBG.webp",
    "./images/yellowBG.webp"
  ];

  function handleClick(direction, event) {
    if (direction === "left") {
      if (counter === 0) {
        setCounter(4);
        setBackground(backgrounds[4]);
      } else {
        const newCounter = counter - 1;
        setCounter(newCounter);
        setBackground(backgrounds[newCounter]);
      }
    }

    if (direction === "right") {
      if (counter === 4) {
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
      <ArrowLeft onClick={event => handleClick("left", event)} />
      <Preview src={background} />
      <ArrowRight onClick={event => handleClick("right", event)} />
    </FlexContainer>
  );
}

BackgroundSelect.propTypes = {
  onChange: PropTypes.func
};
