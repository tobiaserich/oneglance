import styled from "@emotion/styled";

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.secondBackgroundTransparent};
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  height: 40px;
  width: 80%;
  background: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.darkfont};
  border-radius: 12px;
  box-shadow: 0px 3px 6px #0000004d;
  font-size: 18px;
  margin-top: 30px;
`;
