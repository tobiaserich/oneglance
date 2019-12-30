import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
`;
