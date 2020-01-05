import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  height: 10%;
  background-color: ${({ theme }) => theme.colors.backgroundTransparent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.font};
`;

export default HeaderContainer;
