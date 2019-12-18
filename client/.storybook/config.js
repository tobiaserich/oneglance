import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
