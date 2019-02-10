import React from "react";
import { storiesOf } from "@storybook/react";
import News from "../News";

storiesOf("News", module)
  .addParameters({
    // default for all stories in this book
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
  .add("show News", () => <News />);
