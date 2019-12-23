import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Labeling = styled.label`
  text-align: center;
  display: block;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.font};
`;

export default function Label({ children }) {
  return <Labeling>{children}</Labeling>;
}

Label.propTypes = {
  children: PropTypes.node
};
