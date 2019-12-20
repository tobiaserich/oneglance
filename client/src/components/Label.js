import React from "react";
import styled from "@emotion/styled";

const Labeling = styled.label`
  text-align: center;
  display: block;
`;

export default function Label(props) {
  return <Labeling>{props.children}</Labeling>;
}
