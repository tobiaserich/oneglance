import styled from "@emotion/styled";

export const Headline = styled.h2`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.font};
  position: relative;
  z-index: 8001;
  margin: 5px 0px 0px 10px;

  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-shadow: 0px 0px 10px #262626;
`;
