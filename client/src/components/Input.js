import styled from "@emotion/styled";

const Input = styled.input`
  display: block;
  height: ${({ height }) => height || "40px"};
  width: 80%;
  background-color: ${({ theme }) => theme.colors.active};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin: auto;
  margin-top: "10px";
  padding-left: 10px;
  text-align: ${({ align }) => align};
`;

export const EntryInput = styled(Input)`
  margin: auto;
  margin-top: 10px;
  height: 30px;
`;

export default Input;
