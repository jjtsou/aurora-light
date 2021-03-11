import PropTypes from 'prop-types';
import { useCoinDetails } from '../../hooks';

const CoinDetails = ({ id }) => {
  const { coinDetails } = useCoinDetails(id);
  console.log('coinDetails', coinDetails);
  return <div>{id}</div>;
};

CoinDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CoinDetails;
