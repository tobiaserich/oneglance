import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const InputField = styled.input`
  display: block;
  height: 40px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.active};
  border: none;
  border-radius: 1px;
  font-size: 18px;
  margin: auto;
  margin-top: 10px;
  padding-left: 5px;
`;

export default function Input({ name }) {
  return <InputField name={name} />;
}

Input.propTypes = {
  name: PropTypes.string.isRequired
};
