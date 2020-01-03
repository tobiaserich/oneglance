import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const Select = styled.select`
  display: block;
  font-size: 16px;
  margin: auto;
  margin-top: 10px;
`;

export default function BackgroundSelect({ onChange }) {
  return (
    <Select
      id="background"
      onChange={event => {
        onChange("bg", event);
      }}
    >
      <option value="./images/partyBG.png">Party</option>
      <option value="./images/birthdayBG.png">Birthday</option>
      <option value="./images/sportBG.png">Sport</option>
      <option value="./images/greenBG.png">green</option>
      <option value="./images/yellowBG.png">Yellow</option>
    </Select>
  );
}

BackgroundSelect.propTypes = {
  onChange: PropTypes.func
};
