import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Item = styled.div`
  cursor: pointer;
  margin-top: ${({ spacer }) => {
    return spacer + "px";
  }};
  font-size: 16px;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.font};
`;

export default function menuItem({ children, spacer, onClick, target, animation, onPress }) {
  return (
    <Item
      spacer={spacer}
      onClick={() => {
        setTimeout(() => onClick(target), 250);
        if (animation) {
          animation(true, "ease-in", "fading");
        }
        if (onPress) {
          onPress();
        }
      }}
    >
      {children}
    </Item>
  );
}

menuItem.propTypes = {
  children: PropTypes.node.isRequired,
  spacer: PropTypes.number
};
