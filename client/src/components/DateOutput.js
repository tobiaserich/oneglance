import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const DateOutput = styled.time`
  color: ${({ theme }) => theme.colors.font};
  font-weight: 500;
  margin-left: 10px;
  position: relative;
  z-index: 9010;
  text-shadow: 0px 0px 10px #262626;
`;

DateOutput.propTypes = {
  date: PropTypes.string.isRequired
};
