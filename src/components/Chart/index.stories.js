import React from "react";
import { storiesOf } from "@storybook/react";
import chart from "../chart";

storiesOf("chart", module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!
      
      ~~~js
      console.log("hello");
      ~~~
      `
    }
  })
  .add("show chart", () => <chart />);
