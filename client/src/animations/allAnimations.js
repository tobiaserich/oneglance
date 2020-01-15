import { keyframes } from "@emotion/core";
const animations = {
  "ease-in": keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }`,
  "ease-out": keyframes`
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(100%);
      }
    }`,
  "fade-in": keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }`,
  "fade-out": keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }`,
  fading: keyframes`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }`
};

export default animations;
