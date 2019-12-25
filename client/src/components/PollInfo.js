import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { InfoEntry } from "./ProfileNavigation";
import blank from "../assets/icons/errorIcon.svg";
import pending from "../assets/icons/pendingIcon.svg";
import finished from "../assets/icons/doneIcon.svg";

const PollEntry = styled(InfoEntry)`
  display: flex;
  justify-content: space-between;
`;

const StatusImage = styled.img`
  max-width: 25px;
`;
const pollStatus = {
  blank: blank,
  pending: pending,
  finished: finished
};
export default function PollInfo({ status }) {
  return (
    <PollEntry item={1}>
      Alcoholic drinks?
      <StatusImage src={pollStatus[status]} alt={"Poll status=" + status} />
    </PollEntry>
  );
}

PollInfo.propTypes = {
  status: PropTypes.string
};