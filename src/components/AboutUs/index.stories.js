import React from "react";
import { storiesOf } from "@storybook/react";

// components
import AboutUs from "../AboutUs";

// AboutUs section
storiesOf("AboutUs", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false
    }
  })
  .add("show AboutUs", () => <AboutUs />);
