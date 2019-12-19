import styled from "@emotion/styled";

const LoginInput = styled.input`
  display: block;
  height: 40px;
  width: 80%;
  background-color: ${props => props.theme.colors.active};
  border: none;
  border-radius: 12px;
  font-size: 18px;
  margin: auto;
  margin-top: 10px;
`;

export default LoginInput;
