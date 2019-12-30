import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const AddCard = styled.form`
  width: 280px;
  height: 400px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
`;

AddCard.propTypes = {
  children: PropTypes.node
};
