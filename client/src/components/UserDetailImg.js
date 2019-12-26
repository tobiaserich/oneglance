import React from "react";
import styled from "@emotion/styled";
import UserImg from "./UserImg";
import blank from "../assets/icons/errorIcon.svg";
import finished from "../assets/icons/doneIcon.svg";
import pending from "../assets/icons/pendingIcon.svg";

const StatusWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const StatusImg = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${({ status }) => (status === "pending" ? "#e5ca00" : "#fff")};
  border-radius: 50%;
`;

const pollStatus = {
  blank: blank,
  finished: finished,
  pending: pending
};
export default function UserDetailImg({ status }) {
  return (
    <UserImg username="Tobi" thread="detail">
      <StatusImg src={pollStatus[status]} status={status} />{" "}
    </UserImg>
  );
}
