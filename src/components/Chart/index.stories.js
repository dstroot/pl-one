import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../Chart';

storiesOf('Chart', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!
      
      ~~~js
      console.log("hello");
      ~~~
      `,
    },
  })
  .add('show chart', () => <Chart />);
