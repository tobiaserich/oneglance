import styled from "@emotion/styled";

export const DateOutput = styled.time`
  color: ${({ theme }) => theme.colors.font};
  margin-left: 10px;
  position: relative;
  z-index: 8001;
  text-shadow: 0px 0px 10px #262626;
`;
