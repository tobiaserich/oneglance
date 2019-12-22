import React from "react";
import styled from "@emotion/styled";

const CardFilter = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 8002;
  background: #0000004d;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export default function DarkFilter() {
  return <CardFilter />;
}
