import React, { useState } from 'react';

// highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// slider
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './styles.scss';

/**
 * Resources:
 *
 * https://stackblitz.com/edit/react-hketvd?file=index.js
 * https://github.com/highcharts/highcharts-react
 * https://github.com/react-component/slider
 * https://www.wealthsimple.com/en-us/
 *
 */

const SliderWithTooltip = createSliderWithTooltip(Slider);

const chartData = {
  chart: {
    type: 'area',
  },
  title: {
    text: null,
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
  // calculate a logarithmic slider position from a value
  const logPosInitial = value => {
    // position will be between 0 and 100
    var minp = 0;
    var maxp = 100;

    // The result should be between 500 and 1,000,000
    var minv = Math.log(500);
    var maxv = Math.log(1000000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
  };

  // need to make the slider logarithmic
  // https://stackoverflow.com/questions/846221/logarithmic-slider
  const logSlideInitial = position => {
    // position will be between 0 and 100
    var minp = 0;
    var maxp = 100;

    // The result should be between 500 and 1,000,000
    var minv = Math.log(500);
    var maxv = Math.log(1000000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    // calculate result
    let result = Math.exp(minv + scale * (position - minp));
    // console.log('0: ' + result);

    // round to nearest - but for a logarithmic scale!
    if (result < 1000) {
      result = Math.ceil(result / 500) * 500;
      // console.log('1: ' + result);
    }
    if (result >= 1000 && result < 10000) {
      result = Math.ceil(result / 1000) * 1000;
      // console.log('4: ' + result);
    }
    if (result >= 10000 && result < 100000) {
      result = Math.ceil(result / 10000) * 10000;
      // console.log('5: ' + result);
    }
    if (result >= 100000 && result < 999999) {
      result = Math.ceil(result / 100000) * 100000;
      // console.log('5: ' + result);
    }

    return result;
  };

  // calculate a logarithmic slider position from a value
  const logPosMonthly = value => {
    // position will be between 0 and 100
    var minp = 0;
    var maxp = 100;

    // The result should be between 25 and 25,000
    var minv = Math.log(25);
    var maxv = Math.log(25000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
  };

  // need to make the slider logarithmic
  // https://stackoverflow.com/questions/846221/logarithmic-slider
  const logSlideMonthy = position => {
    // position will be between 0 and 100
    var minp = 0;
    var maxp = 100;

    // The result should be between 25 and 25,000
    var minv = Math.log(25);
    var maxv = Math.log(25000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    // calculate result
    let result = Math.exp(minv + scale * (position - minp));
    // console.log('0: ' + result);

    // round to nearest - but for a logarithmic scale!
    if (result < 50) {
      result = Math.ceil(result / 5) * 5;
      // console.log('1: ' + result);
    }
    if (result >= 50 && result < 100) {
      result = Math.ceil(result / 10) * 10;
      // console.log('2: ' + result);
    }
    if (result >= 100 && result < 1000) {
      result = Math.ceil(result / 100) * 100;
      // console.log('3: ' + result);
    }
    if (result >= 1000 && result < 10000) {
      result = Math.ceil(result / 1000) * 1000;
      // console.log('4: ' + result);
    }
    if (result >= 10000 && result < 24999) {
      result = Math.ceil(result / 5000) * 5000;
      // console.log('5: ' + result);
    }

    return result;
  };

  const [initial, setInitial] = useState(50000);
  const [monthly, setMonthly] = useState(1000);
  const [risk, setRisk] = useState(6);
  const [riskDesc, setRiskDesc] = useState('Growth');

  // currency formatter
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const changeInitial = value => {
    setInitial(logSlideInitial(value));
  };

  const changeMonthly = value => {
    setMonthly(logSlideMonthy(value));
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
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-0">Design Your Future</h1>
          <p className="text-muted mt-0">See how much your money can grow!</p>
          <h5>Initial Deposit</h5>
          <Slider
            min={0}
            max={100}
            defaultValue={logPosInitial(50000)}
            onChange={changeInitial}
          />
          <h4>{formatter.format(initial).slice(0, -3)}</h4>
          <br />
          <h5>Monthly Deposit</h5>
          <Slider
            min={0}
            max={100}
            defaultValue={logPosMonthly(1000)}
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
          <HighchartsReact highcharts={Highcharts} options={chartData} />
        </div>
      </div>
    </div>
  );
};

export default chart;
