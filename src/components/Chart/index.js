import React from 'react';

// highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './styles.scss';

/**
 * https://stackblitz.com/edit/react-hketvd?file=index.js
 * https://github.com/highcharts/highcharts-react
 * https://github.com/react-component/slider
 *
 */

const SliderWithTooltip = createSliderWithTooltip(Slider);

const log = value => {
  console.log(value); //eslint-disable-line
};

const marks = {
  '-10': '-10°C',
  0: <strong>0°C</strong>,
  26: '26°C',
  37: '37°C',
  50: '50°C',
  100: {
    style: {
      color: 'red',
    },
    label: <strong>100°C</strong>,
  },
};

const options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const test = {
  chart: {
    type: 'area',
  },
  title: {
    text: 'Historic and Estimated Worldwide Population Growth by Region',
  },
  subtitle: {
    text: 'Source: Wikipedia.org',
  },
  xAxis: {
    categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false,
    },
  },
  yAxis: {
    title: {
      text: 'Billions',
    },
    labels: {
      formatter: function() {
        return this.value / 1000;
      },
    },
  },
  tooltip: {
    split: true,
    valueSuffix: ' millions',
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666',
      },
    },
  },
  series: [
    {
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268],
    },
    {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766],
    },
    {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628],
    },
    {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201],
    },
    {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46],
    },
  ],
};

const chart = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <h1>Invest in Tomorrow</h1>
        <p className="lead">
          Use the sliders to see how much your money can grow.
        </p>
        <h5>Initial Deposit</h5>
        <SliderWithTooltip
          min={500}
          max={1000000}
          defaultValue={50000}
          onChange={log}
        />
        <br />
        <h5>Monthly Deposit</h5>
        <SliderWithTooltip
          min={25}
          max={25000}
          defaultValue={2500}
          marks={marks} //marks={['25', '250', '2500', '25k']}
          values={[25, 250, 2500, 25000]}
          onChange={log}
        />
        <br />
        <h5>Risk Level</h5>
        <SliderWithTooltip
          dots
          min={0}
          max={10}
          step={1}
          defaultValue={5}
          onChange={log}
        />
        <br />
      </div>
      <div className="col-md-8">
        <HighchartsReact highcharts={Highcharts} options={test} />
      </div>
    </div>
  </div>
);

export default chart;
