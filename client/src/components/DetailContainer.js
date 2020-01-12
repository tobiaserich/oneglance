import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const DetailContainer = styled.article`
  color: ${({ theme }) => theme.colors.darkfont};
  margin-top: 10px;
`;

export const EventContainer = styled.article`
  height: 90%;
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondBackgroundTransparent};
  margin: auto;
  border-radius: 10px;
  padding: 15px 0px;
  color: ${({ theme }) => theme.colors.darkfont};
  animation-duration: 0.5s;
  animation-name: ${({ direction }) => direction};

  @keyframes right {
    from {
      transform: translate(0%);
    }

    45% {
      transform: translate(100%);
    }
    50% {
      opacity: -1;
      transform: translate(-200%);
    }
    55% {
      opacity: 1;
    }
    to {
      transform: translate(0%);
    }
  }

  @keyframes left {
    from {
      transform: translate(0%);
    }

    45% {
      transform: translate(-100%);
    }
    50% {
      opacity: -1;
      transform: translate(200%);
    }
    55% {
      opacity: 1;
    }
    to {
      transform: translate(0%);
    }
  }
`;

DetailContainer.propTypes = {
  children: PropTypes.node
};
