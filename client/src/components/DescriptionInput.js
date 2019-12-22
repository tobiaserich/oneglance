import React from "react";
import styled from "@emotion/styled";

const TextInput = styled.textarea`
  height: 150px;
  width: 250px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  padding-top: 5px;
  padding-right: 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.active};
`;

export default function DescriptionInput() {
  return <TextInput />;
}
