import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.article`
  color: ${({ theme }) => theme.colors.darkfont};
  margin-top: 10px;
`;

export default function DetailContainer({ children }) {
  return <Container>{children}</Container>;
}

DetailContainer.propTypes = {
  children: PropTypes.node
};
