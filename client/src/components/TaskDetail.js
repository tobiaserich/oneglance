import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const TaskInfo = styled.details`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${({ item, theme }) => (item % 2 === 0 ? theme.colors.active : "")};
  color: ${({ theme }) => theme.colors.darkfont};
`;

export default function TaskDetail({ item, title, children }) {
  return (
    <TaskInfo item={item}>
      <summary>{title}</summary>
      {children}
    </TaskInfo>
  );
}

TaskDetail.propTypes = {
  item: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node
};
