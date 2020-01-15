import styled from "@emotion/styled";

export const DateOutput = styled.time`
  position: relative;
  z-index: 8001;
  margin-left: 10px;
  margin-top: 0px;
  color: ${({ theme }) => theme.colors.active};
  font-size: 16px;
  text-shadow: 0px 0px 10px #262626;
`;

export const DetailDateOutput = styled.time`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-left: -10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.darkfont};
  font-size: 20px;
`;
