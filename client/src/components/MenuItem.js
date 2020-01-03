import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Item = styled.div`
  margin-top: ${({ spacer }) => {
    return spacer + "px";
  }};
  font-size: 16px;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.font};
`;

export default function menuItem({ children, spacer, onClick, target }) {
  if (onClick) {
    return (
      <Item
        spacer={spacer}
        onClick={() => {
          onClick(target);
        }}
      >
        {children}
      </Item>
    );
  } else {
    return <Item spacer={spacer}>{children}</Item>;
  }
}

menuItem.propTypes = {
  children: PropTypes.node.isRequired,
  spacer: PropTypes.number
};
