import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Item = styled.div`
  margin-top: ${props => {
    return props.spacer + "px";
  }};
  font-size: 16px;
  margin-left: 5px;
  color: ${props => props.theme.colors.font};
`;

export default function MenueItem({ children, spacer }) {
  return <Item spacer={spacer}>{children}</Item>;
}

MenueItem.propTypes = {
  children: PropTypes.node.isRequired,
  spacer: PropTypes.number
};
