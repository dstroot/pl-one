import React, { useState, useEffect } from 'react';

// slider
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

// recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  tickFormatter,
} from 'recharts';

import { ReactComponent as Savings } from './media/saving3.svg';
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

// This function calculates future value.  The rate will be based on the risk level,
// the number of periods (nper) will be "x"*12 because we will calculate a value
// for each year.  The payment (pmt) will be the monthly deposit amount and the
// present value (pv) will be the initial deposit. This matches the MSFT excel fv
// calculation
function futureValue(rate, nper, pmt, pv, type) {
  let pow = Math.pow(1 + rate, nper),
    fv;

  if (rate) {
    fv = (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow;
  } else {
    fv = -1 * (pv + pmt * nper);
  }

  return fv.toFixed(2);
}

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
  const [data, setData] = useState([]);

  // currency formatter
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // create data for our graph
  function createGraphData(initialDeposit, monthlyDeposit, riskLevel) {
    // This function creates graph data.  It takes inputs from the sliders.

    const type = 0; // When payments are due. 0 = end of period, 1 = beginning of period.
    const data = []; // this is the array we will return

    // table to define rates to use by risk level
    var rates = [
      { risk: 1, savings: 0.028, investment: 0.03, annuity: 0.0325 },
      { risk: 2, savings: 0.028, investment: 0.03, annuity: 0.0325 },
      { risk: 3, savings: 0.028, investment: 0.03, annuity: 0.0325 },
      { risk: 4, savings: 0.028, investment: 0.03, annuity: 0.0325 },
      { risk: 5, savings: 0.028, investment: 0.045, annuity: 0.049 },
      { risk: 6, savings: 0.028, investment: 0.03, annuity: 0.0325 },
      { risk: 7, savings: 0.028, investment: 0.03, annuity: 0.0325 },
      { risk: 8, savings: 0.028, investment: 0.03, annuity: 0.0325 },
      { risk: 9, savings: 0.028, investment: 0.03, annuity: 0.0325 },
      { risk: 10, savings: 0.028, investment: 0.03, annuity: 0.0325 },
    ];

    // we need to turn "risk level" into return expectations. Risk level can vary between 1 and 10.
    // Risk 1 might be equal to treasuries (e.g. about 2.5-3%) and each tick up might add .25% or so.
    // For the savings rate we might assume a constant rate over time regardless of risk.  CD rates
    // are about 2.8% right now.
    var oRate = rates.filter(function(rate) {
      return rate.risk === riskLevel;
    });

    // create 30 years of data
    for (let x = 0; x <= 30; x++) {
      // calculate the fv for each year
      let savings = -futureValue(
        oRate[0].savings / 12,
        x * 12,
        monthlyDeposit,
        initialDeposit,
        type
      );

      let investment = -futureValue(
        oRate[0].investment / 12,
        x * 12,
        monthlyDeposit,
        initialDeposit,
        type
      );

      let annuity = -futureValue(
        oRate[0].annuity / 12,
        x * 12,
        monthlyDeposit,
        initialDeposit,
        type
      );

      let delta1 = investment - savings;
      let delta2 = annuity - investment;

      data.push({ x, savings, delta1, delta2 });
    }

    return data;
  }

  const changeInitial = value => {
    setInitial(logSlideInitial(value));
    setData(createGraphData(initial, monthly, risk));
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
        <div className="col-md-6">
          <Savings height={400} />
        </div>
        <div className="col-md-6">
          <h1 className="display-4 mb-0">Design Your Future</h1>
          <p className="text-muted mt-0">See how much your money can grow!</p>
          <div className="wrapper mt-5">
            <h4 className="text-primary">
              <span className="small text-muted">Initial Deposit: </span>
              {formatter.format(initial).slice(0, -3)}
            </h4>
            <Slider
              min={0}
              max={100}
              defaultValue={logPosInitial(50000)}
              onChange={changeInitial}
            />
          </div>
          <div className="wrapper mt-5">
            <h4 className="text-primary">
              <span className="small text-muted">Monthly Deposit: </span>
              {formatter.format(monthly).slice(0, -3)}
            </h4>
            <Slider
              min={0}
              max={100}
              defaultValue={logPosMonthly(1000)}
              onChange={changeMonthly}
            />
          </div>
          <div className="wrapper mt-5">
            <h4 className="text-primary">
              <span className="small text-muted">Risk Level: </span>
              {riskDesc}
            </h4>
            <SliderWithTooltip
              dots
              min={0}
              max={10}
              step={1}
              defaultValue={risk}
              onChange={changeRisk}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            style={{
              width: '100%',
              height: '500px',
            }}
          >
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{ top: 0, right: 0, left: 30, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis />
            <YAxis
              tickFormatter={value => formatter.format(value).slice(0, -3)}
            /> */}
                <Tooltip
                  formatter={value => formatter.format(value).slice(0, -3)}
                />
                <Area
                  type="monotone"
                  dataKey="savings"
                  stackId="1"
                  stroke="#CCE1F1"
                  fill="#CCE1F1"
                />
                <Area
                  type="monotone"
                  dataKey="delta1"
                  stackId="1"
                  stroke="#3F92C8"
                  fill="#3F92C8"
                />
                <Area
                  type="monotone"
                  dataKey="delta2"
                  stackId="1"
                  stroke="#007DBD"
                  fill="#007DBD"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chart;
