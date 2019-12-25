import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MainContainer = styled.div`
  height: 400px;
  width: 280px;

  background-color: ${({ theme }) => theme.colors.secondBackgroundTransparent};
`;

export default function DetailCard({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

DetailCard.propTypes = {
  children: PropTypes.node
};
