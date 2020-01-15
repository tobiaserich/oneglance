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
  margin-top: ${({ margin }) => (margin ? margin : "0px")};
  padding-left: 10px;
  text-align: ${({ align }) => align};
  animation-name: ${({ animation, value }) =>
    animation === "start" && !value ? "validation-fail" : ""};
  animation-duration: 1s;
  @keyframes validation-fail {
    from,
    to {
      transform: translate3d(0, 0, 0);
      background-color: ${({ theme }) => theme.colors.alert};
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

export const EntryInput = styled(Input)`
  margin: auto;
  margin-top: 10px;
  height: 30px;
`;

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

export default Input;
