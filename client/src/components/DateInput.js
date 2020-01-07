import styled from "@emotion/styled";

const DateInput = styled.input`
  width: 80%;
  display: block;
  margin: auto;
  text-align: center;
  margin-top: 5px;
  border: none;
  font-family: "Roboto", "sans-serif";
  font-size: 16px;
  letter-spacing: 1.5px;
  border-radius: 10px;
  padding-left: 20%;
  background-color: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.darkfont};
`;

export default DateInput;
