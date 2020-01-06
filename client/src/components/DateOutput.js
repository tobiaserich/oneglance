import styled from "@emotion/styled";

export const DateOutput = styled.time`
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  margin-left: 10px;
  margin-top: 0px;
  position: relative;
  z-index: 8001;
  text-shadow: 0px 0px 10px #262626;
`;

export const DetailDateOutput = styled.time`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.darkfont};
  font-size: 20px;

  margin-top: 10px;
`;
