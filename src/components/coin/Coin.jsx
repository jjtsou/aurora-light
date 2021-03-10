import PropTypes from 'prop-types';

const Coin = ({
  symbol,
  name,
  currentPrice,
  highPrice24h,
  lowPrice24h,
  priceChangePercentage24h,
}) => (
  <tr>
    <td>{symbol}</td>
    <td>{name}</td>
    <td>{currentPrice}</td>
    <td>{highPrice24h}</td>
    <td>{lowPrice24h}</td>
    <td>{priceChangePercentage24h}</td>
  </tr>
);

Coin.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  highPrice24h: PropTypes.number.isRequired,
  lowPrice24h: PropTypes.number.isRequired,
  priceChangePercentage24h: PropTypes.number.isRequired,
};

export default Coin;
