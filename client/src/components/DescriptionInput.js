import React from "react";
import styled from "@emotion/styled";

const TextInput = styled.textarea`
  height: 150px;
  width: 250px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  padding: 5px 10px 0px 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.active};
`;

export default function DescriptionInput() {
  return <TextInput />;
}
