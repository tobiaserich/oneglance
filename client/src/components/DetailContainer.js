import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const DetailContainer = styled.article`
  color: ${({ theme }) => theme.colors.darkfont};
  margin-top: 10px;
`;

export const DetailEventContainer = styled.article`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondBackgroundTransparent};
  margin: auto;
  border-radius: 10px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.darkfont};
`;

DetailContainer.propTypes = {
  children: PropTypes.node
};
