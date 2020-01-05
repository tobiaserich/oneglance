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
      <option value="./images/partyBG.webp">Party</option>
      <option value="./images/birthdayBG.webp">Birthday</option>
      <option value="./images/sportBG.webp">Sport</option>
      <option value="./images/greenBG.webp">green</option>
      <option value="./images/yellowBG.webp">Yellow</option>
    </Select>
  );
}

BackgroundSelect.propTypes = {
  onChange: PropTypes.func
};
