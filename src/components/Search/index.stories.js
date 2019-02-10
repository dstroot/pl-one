import React from "react";
import { storiesOf } from "@storybook/react";

// components
import Search from "../Search";

// Search section
storiesOf("Search", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false
    }
  })
  .add("show Search", () => <Search />);
