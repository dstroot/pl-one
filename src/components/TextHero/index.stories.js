import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import TextHero from '../TextHero';

// TextHero section
storiesOf('TextHero', module).add('show TextHero', () => (
  <TextHero
    heading="This is a Heading"
    text="This is some very important marketing text..."
    link="https://somelink"
  />
));
