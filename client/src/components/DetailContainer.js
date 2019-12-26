import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const DetailContainer = styled.article`
  color: ${({ theme }) => theme.colors.darkfont};
  margin-top: 10px;
`;

DetailContainer.propTypes = {
  children: PropTypes.node
};
