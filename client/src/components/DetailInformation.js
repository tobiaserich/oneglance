import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { DetailContainer, PollDetailContainer } from "./Container";
const Title = styled.summary`
  padding-left: ${({ expand }) => (expand ? "" : "20px")};
  &::-webkit-details-marker {
    display: ${({ expand }) => (expand ? "" : "none")};
  }
`;

≈
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
