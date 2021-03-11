import PropTypes from 'prop-types';
import { usePriceChart } from '../../hooks';

const PriceChart = ({ id }) => {
  const { chartData } = usePriceChart(id);
  console.log('chartData', chartData);
  return <div>{id}</div>;
};

PriceChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PriceChart;
