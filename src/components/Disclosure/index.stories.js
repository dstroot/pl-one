import React from "react";
import { storiesOf } from "@storybook/react";

// components
import Disclosure from "../Disclosure";

// Disclosure section
storiesOf("Disclosure", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        A simple view-only generic component with internal state to manage it's display (more/less)
      `
    }
  })
  .add("show Disclosure", () => <Disclosure />);
