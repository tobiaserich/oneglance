import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const InfoNav = styled.ul`
  width: 280px;
  display: flex;
  flex-direction: column;
`;

export const InfoEntry = styled.li`
  height: 40px;
  width: 100%;
  list-style: none;
  background: ${({ item, theme }) => (item % 2 === 0 ? theme.colors.active : "")};
  color: ${({ theme }) => {
    return theme.colors.darkfont;
  }};
`;

export default function ProfileNavigation() {
  return (
    <InfoNav>
      <InfoEntry item={1}>Personal Information</InfoEntry>
      <InfoEntry item={2}>Polls</InfoEntry>
      <InfoEntry item={3}>Tasks</InfoEntry>
    </InfoNav>
  );
}

InfoEntry.propTypes = {
  item: PropTypes.number
};
