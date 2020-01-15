import styled from "@emotion/styled";

export const Headline = styled.h2`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.active};
  position: relative;
  z-index: 8001;

  margin: 5px 0px 0px 10px;

  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-shadow: 0px 0px 10px #262626;
`;

export const HeadlineDark = styled.h1`
  font-size: 28px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.darkfont};
  margin: 5px 0px 0px 15px;
`;

export const Welcome = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.font};
`;

export const AppTitle = styled.h3`
  font-size: 30px;
  font-family: "Great Vibes";
  color: ${({ theme }) => theme.colors.font};
  margin: 5px;
`;

export const DetailHeadline = styled.h3`
  margin: 0;
`;
