import styled from "@emotion/styled";

export const DescriptionInput = styled.textarea`
  height: 150px;
  width: 80%;
  display: block;
  margin: auto;
  border-radius: 10px;
  border: none;
  padding: 5px 10px 0px 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.active};
  animation-name: ${({ animation, value }) =>
    animation === "start" && !value ? "validation-fail" : ""};
  animation-duration: 1s;
  @keyframes validation-fail {
    from,
    to {
      transform: translate3d(0, 0, 0);
      background-color: ${({ theme }) => theme.colors.alert};
    }

    40%,
    80% {
      transform: translate3d(-10px, 0, 0);
    }

    20%,
    60% {
      transform: translate3d(10px, 0, 0);
    }
  }
`;
