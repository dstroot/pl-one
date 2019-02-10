import React from "react";
import { storiesOf } from "@storybook/react";

// components
import CardGroup from "../CardGroup";

// CardGroup section
storiesOf("CardGroup", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false
    }
  })
  .add("show CardGroup", () => <CardGroup />);
