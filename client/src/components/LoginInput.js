import styled from "@emotion/styled";

const LoginInput = styled.input`
  display: block;
  height: 40px;
  width: 250px;
  background-color: ${props => props.theme.colors.active};
  border: none;
  border-radius: 12px;
  font-size: 18px;
`;
export default LoginInput;
