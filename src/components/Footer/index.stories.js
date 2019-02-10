import React from "react";
import { storiesOf } from "@storybook/react";

// components
import Footer from "../Footer";

// Footer section
storiesOf("Footer", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        A simple view-only generic planet component.
      `
    }
  })
  .add("show Footer", () => <Footer />);
