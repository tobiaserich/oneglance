import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const Label = styled.label`
  width: 100%;
  text-align: center;
  display: block;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.font};
`;

Label.propTypes = {
  children: PropTypes.node
};
