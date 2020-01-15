import React from "react";
import styled from "@emotion/styled";

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

export default function DottedNavBar({ contentNr }, props) {
  const dots = new Array(4).fill("");
  return (
    <DotContainer>
      {dots.map((dot, index) => {
        const background = index === contentNr ? "#BDBDBD" : "white";
        console.log(index, contentNr);
        return <Dot key={index} background={background} />;
      })}
    </DotContainer>
  );
}
