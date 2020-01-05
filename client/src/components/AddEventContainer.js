import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const AddContainer = styled.form`
  height: 90%;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
`;

AddContainer.propTypes = {
  children: PropTypes.node
};
