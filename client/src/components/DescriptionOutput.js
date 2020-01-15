import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const DescriptionOutput = styled.div`
  width: 95%;
  max-height: 45%;
  position: relative;
  overflow: hidden;
  z-index: 8001;
  margin-top: 10px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.active};
  text-shadow: 0px 0px 10px #262626;
  text-overflow: ellipsis;
`;

export const OutputWithOverflow = styled.div`
  width: 95%;
  height: 90%;
  overflow: scroll;
  margin-top: 20px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.darkfont};
  font-size: 22px;
`;

DescriptionOutput.propTypes = {
  children: PropTypes.node
};
