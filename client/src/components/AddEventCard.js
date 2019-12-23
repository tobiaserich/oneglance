import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Card = styled.form`
  width: 280px;
  height: 400px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
`;

export default function AddEventCard({ children }) {
  return <Card>{children}</Card>;
}

AddEventCard.propTypes = {
  children: PropTypes.node
};
