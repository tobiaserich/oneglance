import styled from "@emotion/styled";

const Label = styled.label`
  width: 100%;
  margin-top: ${({ spacer }) => (spacer ? spacer : "13px")};
  text-align: center;
  color: ${({ theme }) => theme.colors.font};
`;

export default Label;
