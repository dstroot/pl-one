import React from "react";
import { storiesOf } from "@storybook/react";

// components
import FourOhFour from "../FourOhFour";

// FourOhFour section
storiesOf("FourOhFour", module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
        What do provide for a 404?.
      `
    }
  })
  .add("show FourOhFour", () => <FourOhFour />);
