import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const DetailCard = styled.div`
  height: 400px;
  width: 280px;

  background-color: ${({ theme }) => theme.colors.secondBackgroundTransparent};
`;

DetailCard.propTypes = {
  children: PropTypes.node
};
