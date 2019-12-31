import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const AddButton = styled.div`
  width: 100%;
  height: 60px;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.secondBackgroundTransparent};
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 1px;
`;
export const AddCard = styled.form`
  width: 280px;
  height: 400px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
`;

AddCard.propTypes = {
  children: PropTypes.node
};
