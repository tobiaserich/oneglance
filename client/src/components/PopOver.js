import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: fade-in-out;
  animation-duration: 2s;
  font-size: 16px;

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Arrow = styled.div`
  height: 0;
  width: 0;
  margin-top: -5px;
  border-left: ${({ border }) => (border ? border : "8px")} solid transparent;
  border-right: ${({ border }) => (border ? border : "8px")} solid transparent;
  border-bottom: ${({ arrow }) => (arrow ? arrow : "15px")} solid
    ${({ theme }) => theme.colors.active};
`;

const ContentBox = styled.div`
  width: 40%;
  height: 20px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.darkfont};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.active};
`;
export default function PopOver({ children, size }) {
  const arrow = { small: "10px", medium: "15px" };
  const border = { small: "4px", medium: "8px" };
  return (
    <Container>
      <Arrow arrow={arrow[size]} border={border[size]} />
      <ContentBox>{children}</ContentBox>
    </Container>
  );
}

PopOver.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string
};
