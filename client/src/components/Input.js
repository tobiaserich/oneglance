import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const Input = styled.input`
  display: block;
  height: 40px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.active};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin: auto;
  margin-top: 10px;
  padding-left: 5px;
`;

Input.propTypes = {
  name: PropTypes.string.isRequired
};
