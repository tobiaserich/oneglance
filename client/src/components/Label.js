import styled from "@emotion/styled";

const Label = styled.label`
  width: 100%;
  text-align: center;
  margin-top: ${({ spacer }) => (spacer ? spacer : "13px")};
  color: ${({ theme }) => theme.colors.font};
`;

export default Label;
