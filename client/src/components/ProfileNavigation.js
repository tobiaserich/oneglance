import styled from "@emotion/styled";

export const InfoNav = styled.ul`
  width: 280px;
  display: flex;
  flex-direction: column;
`;

export const MemberNav = styled(InfoNav)`
  width: 100%;
  padding: 0;
  overflow: scroll;
`;

export const PollNav = styled(InfoNav)`
  width: 100%;
  margin-bottom: 45px;
  padding: 0;
  overflow: scroll;
`;

export const InfoEntry = styled.li`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  list-style: none;
  background: ${({ item, theme }) => (item % 2 === 0 ? theme.colors.active : "")};
  color: ${({ theme }) => theme.colors.darkfont};
`;

export const PollEntry = styled(InfoEntry)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
