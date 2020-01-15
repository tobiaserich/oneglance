import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 18px;
          margin: 0;
          height: 100vh;
          width: 100vw;
          font-family: "roboto", "sans-serif";
          background-color: ${theme.colors.background};
        }
        #root {
          margin: auto;
          height: 100%;
          max-width: 400px;
        }
      `}
    />
  );
}

export default GlobalStyles;
