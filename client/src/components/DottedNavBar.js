import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DotContainer = styled.div`
  display: flex;
  height: 30px;
  width: 60%;
  align-items: center;
  justify-content: space-around;
`;
const Dot = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${({ background }) => background};
  border-radius: 50%;
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.darkfont};
`;


export default function DottedNavBar({ contentNr }) {
  const dots = new Array(4).fill("");
  return (
    <DotContainer>
      {dots.map((dot, index) => {
        const background = index === contentNr ? "#BDBDBD" : "white";

        return <Dot key={index} background={background} />;
      })}
    </DotContainer>
  );
}

DottedNavBar.propTypes = {
  contentNr: PropTypes.number
};
