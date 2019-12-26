import React from "react";
import styled from "@emotion/styled";
import UserImg from "./UserImg";
import blank from "../assets/icons/errorIcon.svg";
import finished from "../assets/icons/doneIcon.svg";

const StatusImg = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 50%;
`;

const pollStatus = {
  blank: blank,
  finished: finished
};
export default function UserDetailImg({ status, username }) {
  const statusReport = `PollStatus for User ${username}: ${status}`;
  return (
    <UserImg username={username} thread="detail">
      <StatusImg src={pollStatus[status]} status={status} alt={statusReport} />
    </UserImg>
  );
}
