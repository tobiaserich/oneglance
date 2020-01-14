import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { PagesContainer } from "../components/Container";
import Cards from "../components/Cards";
import { AddButton } from "../components/Button";
import Header from "../components/Header";

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightfont};
  text-shadow: 2px 2px 5px ${({ theme }) => theme.colors.darkfont};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Overview() {
  return (
    <PagesContainer animation="fade-in">
      <Cards />
      <AddButton>
        <CustomLink to="addEvent">Add Event </CustomLink>
      </AddButton>
    </PagesContainer>
  );
}
