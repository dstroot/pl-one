import React, { useState } from 'react';

// highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// slider
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './styles.scss';

/**
 * https://stackblitz.com/edit/react-hketvd?file=index.js
 * https://github.com/highcharts/highcharts-react
 * https://github.com/react-component/slider
 * https://www.wealthsimple.com/en-us/
 *
 *
 */

const SliderWithTooltip = createSliderWithTooltip(Slider);

// const marks = {
//   '-10': '-10°C',
//   0: <strong>0°C</strong>,
//   26: '26°C',
//   37: '37°C',
//   50: '50°C',
//   100: {
//     style: {
//       color: 'red',
//     },
//     label: <strong>100°C</strong>,
//   },
// };

const test = {
  chart: {
    type: 'area',
  },
  title: {
    // text: 'Historic and Estimated Worldwide Population Growth by Region',
    text: null,
  },
  // subtitle: {
  //   text: 'Source: Wikipedia.org',
  // },
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
      name: 'Pacific Life',
      data: [502, 635, 809, 947, 1402, 3634, 5268],
    },
    {
      name: 'Traditional Investing',
      data: [163, 203, 276, 408, 547, 729, 628],
    },
    {
      name: 'Traditional Savings',
      data: [18, 31, 54, 156, 339, 818, 1201],
    },
  ],
};

const chart = () => {
  const [initial, setInitial] = useState(50000);
  const [monthly, setMonthly] = useState(1000);
  const [risk, setRisk] = useState(7);
  const [riskDesc, setRiskDesc] = useState('Growth');

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const changeInitial = value => {
    setInitial(value);
  };

  const changeMonthly = value => {
    setMonthly(value);
  };

  const changeRisk = value => {
    setRisk(value);

    // switch to set risk description
    switch (value) {
      case 0:
      case 1:
      case 2:
        setRiskDesc('Conservative');
        break;

      case 3:
      case 4:
      case 5:
        setRiskDesc('Balanced');
        break;

      case 6:
      case 7:
      case 8:
        setRiskDesc('Growth');
        break;

      case 9:
      case 10:
        setRiskDesc('Aggressive');
        break;

      default:
        setRiskDesc('Error');
        break;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-0">Invest in Tomorrow</h1>
          <p className="text-muted mt-0">
            Use the sliders to see how much your money can grow.
          </p>
          <h5>Initial Deposit</h5>
          <Slider
            min={500}
            max={1000000}
            defaultValue={initial}
            onChange={changeInitial}
          />
          <h4>{formatter.format(initial).slice(0, -3)}</h4>
          <br />
          <h5>Monthly Deposit</h5>
          <Slider
            min={25}
            max={25000}
            defaultValue={monthly}
            // marks={marks} //marks={['25', '250', '2500', '25k']}
            // values={[25, 250, 2500, 25000]}
            onChange={changeMonthly}
          />
          <h4>{formatter.format(monthly).slice(0, -3)}</h4>
          <br />
          <h5>Risk Level</h5>
          <SliderWithTooltip
            dots
            min={0}
            max={10}
            step={1}
            defaultValue={risk}
            onChange={changeRisk}
          />
          <h4>{riskDesc}</h4>
          <br />
        </div>
        <div className="col-md-8">
          <HighchartsReact highcharts={Highcharts} options={test} />
        </div>
      </div>
    </div>
  );
};

export default chart;
