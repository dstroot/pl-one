import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import HeroWash from "../HeroWash";
import logo from "../HeroWash/media/PacificLife_BrandIcon_White.png";
import image from "../HeroWash/media/2.jpg";

const stories = storiesOf("HeroWash", module);
stories.addDecorator(withKnobs);

stories
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false
    }
  })
  .add("show background 1", () => (
    <HeroWash
      logo={logo}
      bgimage={image}
      tagline={text("Tagline", "You. Protected.")}
      line1={text("Line 1", "Our mission is protecting your financial future.")}
      line2={text("Line 2", "We’ve fulfilled that promise for 150 years.")}
    />
  ))
  .add("show background 2", () => (
    <HeroWash
      logo={logo}
      bgimage={text(
        "Background Image",
        "https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg"
      )}
      tagline={text("Tagline", "You. Protected.")}
      line1={text("Line 1", "Our mission is protecting your financial future.")}
      line2={text("Line 2", "We’ve fulfilled that promise for 150 years.")}
    />
  ));
