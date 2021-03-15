import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { StyledPriceChart, PriceChartSkeleton } from './PriceChart.styles';
import { ButtonList } from '../common';
import { usePriceChart } from '../../hooks';
import { getChartTimePeriod, getChartConfig } from '../../utils';

const PriceChart = ({ id }) => {
  const { chartData, isPending } = usePriceChart(id);
  const [timePeriodData, setTimePeriodData] = useState([]);

  useEffect(() => {
    const initialTimePeriod = chartData[1];
    if (initialTimePeriod) {
      setTimePeriodData(initialTimePeriod);
    }
  }, [chartData, setTimePeriodData]);

  const clickHandler = (value) => setTimePeriodData(chartData[value]);
  const { data, options } = getChartConfig(timePeriodData);

  return (
    <StyledPriceChart>
      {isPending ? (
        <PriceChartSkeleton />
      ) : (
        <>
          <Line data={data} options={options} />
          <ButtonList
            list={getChartTimePeriod()}
            clickHandler={clickHandler}
            variant="contained"
            size="small"
          />
        </>
      )}
    </StyledPriceChart>
  );
};

PriceChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PriceChart;
