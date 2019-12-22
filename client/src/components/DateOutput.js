import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DateField = styled.time`
  color: ${({ theme }) => theme.colors.font};
  font-weight: 500;
  margin-left: 10px;
  position: relative;
  z-index: 9010;
  text-shadow: 0px 0px 10px #262626;
`;

export default function DateInput({ date }) {
  return <DateField>{date}</DateField>;
}

DateInput.propTypes = {
  date: PropTypes.string.isRequired
};
