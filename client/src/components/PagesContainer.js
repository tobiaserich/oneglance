import styled from "@emotion/styled";

export const PagesContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
`;
