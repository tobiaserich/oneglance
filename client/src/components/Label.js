import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const Label = styled.label`
  text-align: center;
  display: block;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.font};
`;

Label.propTypes = {
  children: PropTypes.node
};
