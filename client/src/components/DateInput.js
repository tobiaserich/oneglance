import styled from "@emotion/styled";

const DateInput = styled.input`
  width: 80%;
  display: block;
  margin: auto;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.darkfont};
  font-family: "Roboto", "sans-serif";
  font-size: 16px;
  letter-spacing: 1.5px;
  background-color: ${({ theme }) => theme.colors.active};
  animation-name: ${({ animation, value }) =>
    animation === "start" && !value ? "validation-fail" : ""};
  animation-duration: 1s;
  @keyframes validation-fail {
    from,
    to {
      transform: translateX(0);
      background-color: ${({ theme }) => theme.colors.alert};
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-10px);
    }

    20%,
    40%,
    60%,
    80% {
      transform: translateX(10px);
    }
  }
`;

export default DateInput;
