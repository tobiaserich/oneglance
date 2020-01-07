import styled from "@emotion/styled";

export const InfoNav = styled.ul`
  width: 280px;
  display: flex;
  flex-direction: column;
`;

export const InfoEntry = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  padding-left: 10px;
  list-style: none;
  background: ${({ item, theme }) => (item % 2 === 0 ? theme.colors.active : "")};
  color: ${({ theme }) => theme.colors.darkfont};
`;
