import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  StyledPriceChart,
  StyledChartButtonContainer,
  StyledChartButton,
} from './PriceChart.styles';
import { Typography } from '../common';
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

  const handleClick = (value) => setTimePeriodData(chartData[value]);
  const { data, options } = getChartConfig(timePeriodData);

  return (
    <StyledPriceChart>
      {isPending ? (
        <>
          <Skeleton width="70vw" height="65vh" variant="rect" />
          <Skeleton width="30vw" height="5vh" variant="rect" />
        </>
      ) : (
        <>
          <Line data={data} options={options} />
          <StyledChartButtonContainer>
            {getChartTimePeriod().map(({ name, value }) => (
              <StyledChartButton
                key={`${name}_changethis`}
                onClick={() => handleClick(value)}
                variant="contained"
                size="small"
              >
                <Typography color="#505050">{name}</Typography>
              </StyledChartButton>
            ))}
          </StyledChartButtonContainer>
        </>
      )}
    </StyledPriceChart>
  );
};

PriceChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PriceChart;
