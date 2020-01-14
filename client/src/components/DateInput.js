import styled from "@emotion/styled";

const DateInput = styled.input`
  width: 80%;
  display: block;
  margin: auto;

  border: none;
  font-family: "Roboto", "sans-serif";
  font-size: 16px;
  letter-spacing: 1.5px;
  border-radius: 10px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.darkfont};
  animation-name: ${({ animation, value }) =>
    animation === "start" && !value ? "validation-fail" : ""};
  animation-duration: 1s;
  @keyframes validation-fail {
    from,
    to {
      transform: translate3d(0, 0, 0);
      background-color: #ff7063;
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
      transform: translate3d(10px, 0, 0);
    }
  }
`;

export default DateInput;
