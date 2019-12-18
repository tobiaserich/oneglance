import styled from "@emotion/styled";

const LoginButton = styled.button`
  height: 40px;
  width: 250px;
  background: ${props => props.theme.colors.active};
  border-radius: 12px;
  box-shadow: 0px 3px 6px #0000004d;
  font-size: 18px;
`;

export default LoginButton;
