import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DetailContainer = styled.details`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${({ item, theme }) => (item % 2 === 0 ? theme.colors.active : "")};
  color: ${({ theme }) => theme.colors.darkfont};
`;

const Title = styled.summary`
  padding-left: ${({ expand }) => (expand ? "" : "20px")};
  &::-webkit-details-marker {
    display: ${({ expand }) => (expand ? "" : "none")};
  }
`;

export const PollDetailContainer = styled.aside`
  width: 100%;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
`;

export default function DetailInformation({ item, title, children }) {
  const expand = children ? true : false;
  return (
    <DetailContainer item={item}>
      <Title expand={expand}>{title}</Title>
      {children}
    </DetailContainer>
  );
}

DetailInformation.propTypes = {
  item: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node
};
