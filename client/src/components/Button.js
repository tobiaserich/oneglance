import styled from "@emotion/styled";

const Button = styled.button`
  height: 40px;
  width: 80%;
  background: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.darkfont};
  border-radius: 12px;
  box-shadow: 0px 3px 6px #0000004d;
  font-size: 18px;
  margin-top: 30px;
`;

export default Button;