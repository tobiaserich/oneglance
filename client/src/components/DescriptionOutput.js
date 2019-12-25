import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const DescriptionOutput = styled.div`
  width: 96%;
  max-height: 45%;
  margin-top: 10px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.font};
  position: relative;
  text-shadow: 0px 0px 10px #262626;
  z-index: 9002;
  overflow: hidden;
`;

DescriptionOutput.propTypes = {
  children: PropTypes.node.isRequired
};
